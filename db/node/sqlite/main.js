import sqlite3 from "sqlite3";

const createDBConnection = () => {
  const db = new sqlite3.Database("../../database/sqlite/database.db");
  return db;
};

const dropTable = (db) => {
  db.serialize(() => {
    db.run("DROP TABLE USER");
    db.run("DROP TABLE POST");
  });
};

const createTable = (db) => {
  db.serialize(() => {
    db.run("CREATE TABLE USER (name TEXT, idade NUMBER)");
    db.run("CREATE TABLE POST (message TEXT, date TEXT)");
  });
};

const initDatabase = (db) => {
  db.serialize(() => {
    const stmt = db.prepare("INSERT INTO USER VALUES (?,?)");
    for (let i = 0; i < 10; i++) {
      stmt.run("Rodrigo" + i, 32 + i);
    }
    stmt.finalize();
  });
};

const getAllUsers = (db) => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM USER", (err, rows) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(rows);
    });
  });
};

const main = async () => {
  const db = createDBConnection();
  dropTable(db);
  createTable(db);
  initDatabase(db);

  try {
    const data = await getAllUsers(db);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

main();
