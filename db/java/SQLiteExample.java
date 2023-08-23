import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;

public class SQLiteExample {
  public static void main(String[] args) {
    Connection conn = null;
    try {
      conn = DriverManager.getConnection("jdbc:sqlite:../database/sqlite/database.db");
      Statement stat = conn.createStatement();
      stat.executeUpdate("drop table if exists USER");
      stat.executeUpdate("drop table if exists POST");
      stat.executeUpdate("create table USER (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)");
      stat.executeUpdate("create table POST (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT, date TEXT)");

      String sql = "INSERT INTO USER (name,age) VALUES (?,?)";
      PreparedStatement prepst = conn.prepareStatement(sql);
      prepst.setString(1, "Rodrigo");
      prepst.setInt(2, 34);
      prepst.executeUpdate();

      Statement statment = conn.createStatement();
      statment.executeUpdate("insert into user(name,age) values('Rodrigo', 34)");
      ResultSet resultSet = statment.executeQuery("SELECT * FROM USER");
      while (resultSet.next()) {
        String id = resultSet.getString("id");
        String name = resultSet.getString("name");
        System.out.println(String.format("id:%s, name:%s", id, name));
      }
    } catch (Exception e) {
      System.out.println(e);
    } finally {
      try {
        if (conn != null) {
          conn.close();
        }
      } catch (SQLException e) {
        System.out.println(e.getMessage());
      }
    }

  }
}
