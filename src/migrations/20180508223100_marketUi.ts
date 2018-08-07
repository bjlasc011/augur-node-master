// ething like this 
import * as Knex from "knex";
import { reshapeMarketsRowToUIMarketInfo } from "../server/getters/database";
​
exports.up = async (knex: Knex): Promise<any> => {
 return knex.schema.dropTableIfExists("historical_total_stake").then((): PromiseLike<any> => {
  return knex.schema.raw(`CREATE TABLE historical_total_stake (
   universe varchar(66) NOT NULL,
   "totalShares" varchar(255) NOT NULL,
   "blockTime" integer NOT NULL 
  )`)
  .raw(`CREATE TRIGGER trigger_name before insert
     on blocks
     BEGIN
     *Add some logic here*
     END;
   `).raw(
    `CREATE TRIGGER trigger_name before update
    on blocks
    BEGIN
    *Add some logic here*
    END;
    `
   );
 });
};
​
exports.down = async (knex: Knex): Promise<any> => {
 return knex.schema.dropTableIfExists("historical_total_stake");
};