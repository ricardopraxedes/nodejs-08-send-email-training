import { Connection, createConnection, getConnectionOptions } from "typeorm";

async function createDBConnection(host = "db"): Promise<Connection> {
  const newOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(newOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test" ? "test_db" : newOptions.database,
    })
  );
}

export { createDBConnection };
