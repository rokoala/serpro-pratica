
def is_palindrome(word):
    if len(word) <= 3:
        return '?'

    return 'S' if word == word[::-1] else 'N'
