# https://velog.io/@jguuun/%EC%A0%95%EB%A0%AC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
arr = [8, 4, 6, 2, 9, 1, 3, 7, 5]


def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            print(j, j + 1)
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
        print(arr)


# print('before:', arr)
# bubble_sort(arr)
# print('after:', arr)


def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
        print(arr)


# print('before:', arr)
# selection_sort(arr)
# print('after:', arr)


def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        for j in range(i, 0, -1):
            if arr[j - 1] > arr[j]:
                arr[j - 1], arr[j] = arr[j], arr[j - 1]
        print(arr)


# print('before:', arr)
# insertion_sort(arr)
# print('after:', arr)


def merge_sort(arr):
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    low_arr = merge_sort(arr[:mid])
    high_arr = merge_sort(arr[mid:])

    merged_arr = []
    l = h = 0
    while l < len(low_arr) and h < len(high_arr):
        if low_arr[l] < high_arr[h]:
            merged_arr.append(low_arr[l])
            l += 1
        else:
            merged_arr.append(high_arr[h])
            h += 1
    merged_arr += low_arr[l:]
    merged_arr += high_arr[h:]
    print(merged_arr)
    return merged_arr


# print('before:', arr)
# arr = merge_sort(arr)
# print('after:', arr)


def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = len(arr) // 2
    front_arr, pivot_arr, back_arr = [], [], []
    for value in arr:
        if value < arr[pivot]:
            front_arr.append(value)
        elif value > arr[pivot]:
            back_arr.append(value)
        else:
            pivot_arr.append(value)
    print(front_arr, pivot_arr, back_arr)
    return quick_sort(front_arr) + quick_sort(pivot_arr) + quick_sort(back_arr)


print("before:", arr)
arr = quick_sort(arr)
print("after:", arr)
