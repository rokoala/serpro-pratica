import java.util.Random;

public class ArrayShuffler {
  public static void shuffleArray(String[] arr) {
    int n = arr.length;
    Random rand = new Random();

    for (int i = 0; i < n - 1; i++) {
      int j = rand.nextInt(i + 1);
      String temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  public static void main(String[] args) {
    String[] namesArray = { "João", "Maria", "Adão" };
    shuffleArray(namesArray);
    for (String name : namesArray) {
      System.out.print(name + " ");
    }
  }
}
