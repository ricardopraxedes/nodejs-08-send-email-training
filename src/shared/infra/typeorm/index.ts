import { Connection, createConnection, getConnectionOptions } from "typeorm";

async function createDBConnection(host = "db"): Promise<Connection> {
  const newOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(newOptions, {
      host,
    })
  );
}

export { createDBConnection };
