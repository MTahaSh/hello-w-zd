import { pgTable, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  serial,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core"



export const user = pgTable("userdata", {
  id: serial("id").primaryKey().notNull(),
  email: varchar("email", {
    length: 255,
  }),
  password: varchar("password", {
    length: 255,
  }),


});


export const db = drizzle(sql, {
  schema: {
    user
  },
});

export const getData = async () => {
  const selectResult = await db.select().from(user);
  console.log('Results', selectResult);
  return selectResult;
};