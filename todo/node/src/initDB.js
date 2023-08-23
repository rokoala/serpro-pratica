class InitDB {
  constructor(db) {
    this.db = db;
  }
  initDB() {
    return new Promise((resolve) => {
      this.db.serialize(() => {
        this.db.run("DROP TABLE IF EXISTS USER;");
        this.db.run("DROP TABLE IF EXISTS POST;");
        this.db.run(
          "CREATE TABLE USER (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, idade NUMBER)"
        );
        this.db.run(
          "CREATE TABLE POST (message TEXT, date TEXT, userId INTEGER, FOREIGN KEY(userId) REFERENCES USER(id))"
        );
        const stmt = this.db.prepare(
          "INSERT INTO USER(name,idade) VALUES (?,?)"
        );
        for (let i = 0; i < 10; i++) {
          stmt.run("Rodrigo" + i, 32 + i);
        }
        stmt.finalize();
        resolve();
      });
    });
  }
}

export default InitDB;
