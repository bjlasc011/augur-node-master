import * as Knex from "knex";

exports.seed = async (knex: Knex): Promise<any> => {
  // Deletes ALL existing entries
  return knex("balances").del().then(async (): Promise<any> => {
    // Inserts seed entries
    const seedData = [{
      token: "TOKEN_ADDRESS",
      owner: "FROM_ADDRESS",
      balance: "9001",
    }, {
      token: "0x0000000000000000001000000000000000000001",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "17",
    }, {
      token: "0x0000000000000000001000000000000000000002",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "500",
    }, {
      token: "0x0000000000000000001000000000000000000003",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "229",
    }, {
      token: "0x0000000000000000001000000000000000000003",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "229",
    }, {
      token: "0x0000000000000000001000000000000000000006",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "229",
    }, {
      token: "0x0000000000000000001000000000000000000007",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "0",
    }, {
      token: "0x1000000000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "100",
    }, {
      token: "0x0100000000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "100000000000000",
    }, {
      token: "CASH",
      owner: "0x1000000000000000000000000000000000000000",
      balance: "1000",
    }, {
      token: "0x2000000000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "500",
    }, {
      token: "CASH",
      owner: "0x2000000000000000000000000000000000000000",
      balance: "2000",
    }, {
      token: "CASH",
      owner: "0x3000000000000000000000000000000000000000",
      balance: "200",
    }, {
      token: "REP_TOKEN",
      owner: "0x0000000000000000000000000000000000abe123",
      balance: "2000",
    }, {
      token: "REP_TOKEN",
      owner: "0x0000000000000000000000000000000000abe321",
      balance: "2000",
    }, {
      token: "FEE_TOKEN_1",
      owner: "0x0000000000000000000000000000000000abe222",
      balance: "100",
    }, {
      token: "FEE_TOKEN_2",
      owner: "0x0000000000000000001000000000000000000003",
      balance: "60",
    }, {
      token: "FEE_TOKEN_3",
      owner: "0x0000000000000000001000000000000000000003",
      balance: "60",
    }, {
      token: "FEE_TOKEN_3",
      owner: "0x0000000000000000000000000000000000abe123",
      balance: "60",
    }, {
      token: "0x2000000000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "30",
    }, {
      token: "0x1000000000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "60",
    }, {
      token: "0x0100000000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "60",
    }, {
      token: "REP_TOKEN",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "20",
    }, {
      token: "REP_TOKEN_CHILD",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "10",
    }, {
      token: "REP_TOKEN_FIRST_GRAND_CHILD",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "8",
    }, {
      token: "REP_TOKEN_SECOND_GRAND_CHILD",
      owner: "0x0000000000000000000000000000000000000021",
      balance: "0",
    }, {
      token: "0xe0e1900000000000000000000000000000000000",
      owner: "0x0000000000000000000000000000000000000b0b",
      balance: "10000000",
    }, {
      token: "REP_TOKEN",
      owner: "0x0000000000000000000000000000000000abe111",
      balance: "4000000",
    }, {
      token: "REP_TOKEN",
      owner: "0x1111111111111111111111111111111111111111",
      balance: "16777216000000000000000000",
    }, {
      token: "REP_TOKEN",
      owner: "0x1111111111111111111111111111111111111112",
      balance: "16777216000000000000000000",
    }, {
      token: "REP_TOKEN",
      owner: "0x1111111111111111111111111111111111111113",
      balance: "16777216000000000000000000",
    }, {
      token: "CASH",
      owner: "0x0000000000000000000000000000000000abe111",
      balance: "1000",
    }, {
      token: "CASH",
      owner: "0x0000000000000000001000000000000000000004",
      balance: "4700",
    }, {
      token: "0xa100000000000000000000000000000000000000",
      owner: "0x000000000000000000000000000000000d00db0b",
      balance: "0.2",
    }, {
      token: "0xa200000000000000000000000000000000000000",
      owner: "0x000000000000000000000000000000000d00db0b",
      balance: "0.2",
    }];
    return knex.batchInsert("balances", seedData, seedData.length);
  });
};
