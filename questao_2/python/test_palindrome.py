import unittest
from palindrome import is_palindrome
from unittest.mock import MagicMock
from unittest.mock import patch


class TestClass:
    def __init__(self):
        print('hello')

    def hello(self, msg):
        return self.world(msg)

    def world(self, msg):
        return f'world {msg}'


class PalindromeTest(unittest.TestCase):

    def setUp(self):
        self.sut = is_palindrome
        self.sut2 = TestClass()
        print('setup...')

    @classmethod
    def setUpClass(self):
        print('setupClass')

    def test_mock(self):
        self.sut2.hello = MagicMock(return_value="jacare")
        self.assertEqual(self.sut2.hello(), 'jacare')

    @patch("TestClass.world")
    def test_world(self, mock_world):
        mock_world.return_value = "macaco"
        self.assertEqual(self.sut2.hello(), 'macaco')

    def test_size_3(self):
        for word in ['ABB', 'AB', 'A']:
            self.assertEqual(self.sut(word), '?',
                             f"{word} return must be ? ")

    def test_is_palindrome(self):
        self.assertEqual(self.sut('ABBA'), 'S', "ABBA is palindrome")

    def test_is_not_palindrome(self):
        self.assertEqual(self.sut('ABBAA'), 'N',
                         "ABBBA is not palindrome")


if __name__ == "__main__":
    unittest.main()
