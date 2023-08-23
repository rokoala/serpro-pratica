import UserRepository from "./UserRepository.js";
import SqlConnector from "./SqlLiteConnector.js";
import InitDB from "./initDB.js";
import PostRepository from "./PostRepository.js";

const main = async () => {
  const db = new SqlConnector("../../database/database.db").getInstance();
  const userRepository = new UserRepository(db);
  const postRepository = new PostRepository(db);

  await new InitDB(db).initDB();

  const users = await userRepository.getUsers();
  await postRepository.addPost(
    { message: "Hello World", date: "22/10/2023" },
    users[0].id
  );

  console.log(await postRepository.getAll());
};

main();
