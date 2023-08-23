class PostRepository {
  constructor(db) {
    this.db = db;
  }
  addPost(post, userId) {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(
        "INSERT INTO POST(message,date,userId) VALUES (?,?,?)"
      );
      stmt.run(post.message, post.date, userId, (err) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve();
      });
      stmt.finalize();
    });
  }
  getAll() {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM POST", (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }
}

export default PostRepository;
