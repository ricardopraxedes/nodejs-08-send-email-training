import { hashSync } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";
import { createDBConnection } from "..";

async function create() {
  const connection = await createDBConnection("localhost");

  const id = uuidV4();

  const password = hashSync("admin", 8);

  await connection.query(
    `INSERT INTO users (id,email,password,"isAdmin",created_at) VALUES ('${id}','admin@admin.com','${password}',true,'now()')`
  );

  await connection.close();
}

create().then(() => console.log("Admin seed created."));
