class UserRepository {
  constructor(db) {
    this.db = db;
  }
  async getUsers() {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM USER", (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }
}

export default UserRepository;
