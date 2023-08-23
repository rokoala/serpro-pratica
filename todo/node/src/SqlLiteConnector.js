import sqlite3 from "sqlite3";

class SqlConnector {
  constructor(path) {
    this.db = new sqlite3.Database(path);
  }
  getInstance() {
    return this.db;
  }
}

export default SqlConnector;
