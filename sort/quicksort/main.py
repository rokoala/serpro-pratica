def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[0]  # Escolhe o primeiro elemento como pivô
    left = []
    right = []

    for num in arr[1:]:
        if num < pivot:
            left.append(num)  # Coloca elementos menores no array 'left'
        else:
            # Coloca elementos maiores ou iguais no array 'right'
            right.append(num)

    return quick_sort(left) + [pivot] + quick_sort(right)


array = [7, 2, 1, 6, 8, 5, 3, 4]
sorted_array = quick_sort(array)
print(sorted_array)  # Exibe o array ordenado
