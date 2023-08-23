import random


def shuffle(arr):
    size = len(arr)
    for i in range(0, size-1, 1):
        j = random.randint(0, i)
        arr[i], arr[j] = arr[j], arr[i]

    return arr


def main():
    arr_test = ["Joao", "Maria", "Jose"]
    print(shuffle(arr_test))


if __name__ == "__main__":
    main()
