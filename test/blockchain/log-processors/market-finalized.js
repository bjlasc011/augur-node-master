"use strict";

const Augur = require("augur.js");
const assert = require("chai").assert;
const setupTestDb = require("../../test.database");
const {processMarketFinalizedLog, processMarketFinalizedLogRemoval} = require("../../../build/blockchain/log-processors/market-finalized");
const {getMarketsWithReportingState} = require("../../../build/server/getters/database");
const {parallel} = require("async");

const getMarketState = (db, params, callback) => {
  parallel({
    market: (next) => getMarketsWithReportingState(db, ["markets.marketId", "market_state.reportingState"]).first().where({"markets.marketId": params.log.market}).asCallback(next),
    winningPayout: (next) => db("payouts").where({marketId: params.log.market, "winning": 1}).first().asCallback(next),
  }, callback);
};

describe("blockchain/log-processors/market-finalized", () => {
  const test = (t) => {
    it(t.description, (done) => {
      setupTestDb((err, db) => {
        assert.isNull(err);
        db.transaction((trx) => {
          processMarketFinalizedLog(trx, t.params.augur, t.params.log, (err) => {
            assert.isNull(err);
            getMarketState(trx, t.params, (err, records) => {
              t.assertions.onAdded(err, records);
              processMarketFinalizedLogRemoval(trx, t.params.augur, t.params.log, (err) => {
                assert.isNull(err);
                getMarketState(trx, t.params, (err, records) => {
                  t.assertions.onRemoved(err, records);
                  done();
                });
              });
            });
          });
        });
      });
    });
  };
  const constants = new Augur().constants;
  test({
    description: "binary market MarketFinalized log and removal",
    params: {
      log: {
        market: "0x0000000000000000000000000000000000000211",
        blockNumber: 1400001,
        transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000A00",
        logIndex: 0,
      },
      augur: {
        constants: constants,
      },
    },
    assertions: {
      onAdded: (err, records) => {
        assert.isNull(err);
        assert.deepEqual(records, {
          market: {
            marketId: "0x0000000000000000000000000000000000000211",
            reportingState: "FINALIZED",
          },
          winningPayout: {
            "isInvalid": 0,
            "marketId": "0x0000000000000000000000000000000000000211",
            "payout0": 0,
            "payout1": 10000,
            "payout2": null,
            "payout3": null,
            "payout4": null,
            "payout5": null,
            "payout6": null,
            "payout7": null,
            "payoutId": 5,
            "tentativeWinning": 1,
            "winning": 1,
          },
        });
      },
      onRemoved: (err, records) => {
        assert.isNull(err);
        assert.deepEqual(records, {
          market: {
            marketId: "0x0000000000000000000000000000000000000211",
            reportingState: "CROWDSOURCING_DISPUTE",
          },
          winningPayout: undefined,
        });
      },
    },
  });
});
