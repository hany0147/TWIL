# 빗물 : 골드 5

h, w = map(int, input().split())

arr = [0] + list(map(int, input().split()))
prefix = [0] * (w + 2)
suffix = [0] * (w + 2)

max_h = max(arr)
max_point = set()
flag = False
tmp = 0

# prefix
for i in range(1, len(arr)):

    # 끄트머리까지 가버렸다면,
    if i == len(arr) - 1:
        flag = True
    if arr[i] == max_h:
        max_point.add(i)
        tmp = (arr[i - 1] - 1)
        break
    prefix[i] = prefix[i - 1] + arr[i]

# suffix
if not flag:
    for i in range(len(arr) -1, 0, -1):
        if arr[i] == max_h:
            max_point.add(i)
            break
        suffix[i] = suffix[i + 1] + arr[i]


print(f'max_point: {max_point}')