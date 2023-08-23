import java.util.Scanner;

public class ScannerTest {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Escreva seu nome");
    String name = scanner.nextLine();
    scanner.close();

    System.out.println(String.format("Nome:%s", name));
  }
}
