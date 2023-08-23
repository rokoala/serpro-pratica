import unittest
from main import XPTO


class XPTO_Test(unittest.TestCase):
    def testXPTO(self):
        self.assertEqual(XPTO(5, [1, 2, 3, 4, 5, 6, 7, 8, 10]), 4)


if __name__ == '__main__':
    unittest.main()
