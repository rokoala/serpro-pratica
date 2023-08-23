from functools import reduce
from palindrome import is_palindrome


def main():
    word = input("Qual a palavra?")
    print(is_palindrome(word))
    words = ["abba", "aaaa", "asdf", "fdddf", "jjjslk", "aabaa", "kkslkk"]
    palindromes = (list(filter(lambda w: w == w[::-1], words)))
    print(list(map(lambda w: {"word": w}, palindromes)))
    print(reduce(lambda x, y: x+y, [1, 2, 3, 4]))


if __name__ == "__main__":
    main()
