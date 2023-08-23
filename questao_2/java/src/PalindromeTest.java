import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runner.Result;
import org.junit.runner.JUnitCore;
import org.junit.runner.notification.Failure;

public class PalindromeTest {
  @Test
  public void testIsPalindrome() {
    assertEquals('S', Palindrome.isPalindrome("ABBA"));
  }

}
