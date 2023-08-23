import java.util.Scanner;

public class Palindrome {

  static public char isPalindrome(String word) {
    if (word.length() <= 3) {
      return '?';
    }

    word.toLowerCase();
    StringBuilder sb = new StringBuilder(word);
    String reversedWord = sb.reverse().toString();
    return word.equals(reversedWord) ? 'S' : 'N';
  }

  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    System.out.println("Qual palavra?");
    String word = scanner.nextLine();
    scanner.close();
    System.out.println(Palindrome.isPalindrome(word));

  }
}
