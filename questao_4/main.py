def XPTO(valor, lista):
    left = 0
    right = len(lista) - 1
    posicao = -1

    while left <= right:
        middle = (left + right) // 2

        if lista[middle] == valor:
            posicao = middle
            break
        elif lista[middle] < valor:
            left = middle + 1
        else:
            right = middle - 1

    return posicao


print(XPTO(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
