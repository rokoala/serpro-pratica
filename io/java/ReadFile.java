import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ReadFile {
  public static void main(String[] args) {
    String filePath = "input.txt";
    String content = "";

    try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
      String line;
      while ((line = reader.readLine()) != null) {
        content += line;
      }
    } catch (IOException e) {
      e.printStackTrace();
    }

    try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
      writer.write(content);
    } catch (IOException e) {
      e.printStackTrace();
    }

  }
}
