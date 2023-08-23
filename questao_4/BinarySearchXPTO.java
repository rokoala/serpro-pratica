public class BinarySearchXPTO {
  public static int XPTO(int valor, int[] lista) {
    int left = 0;
    int right = lista.length - 1;
    int posicao = -1;

    while (left <= right) {
      int middle = left + (right - left) / 2;

      if (lista[middle] == valor) {
        posicao = middle;
        break;
      } else if (lista[middle] < valor) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return posicao;
  }

  public static void main(String[] args) {
    int[] array = { 1, 2, 3, 5, 8, 13, 21 };
    int value = 5;
    int position = XPTO(value, array);
    System.out.println("Value " + value + " found at position " + position);
  }
}
