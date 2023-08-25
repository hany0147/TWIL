# 숫자카드 : 실버 5

n = int(input())
arr = sorted(list(map(int, input().split())))
m = int(input())
nums = list(map(int, input().split()))

for num in nums:
    s = 0
    e = n - 1
    flag = False
    while s <= e:
        mid = (s + e) // 2
        # print('mid:', mid, 's:', s, 'e:', e)
        # 정답일 때
        if arr[mid] == num:
            flag = True
            break
        # up일 때
        elif arr[mid] < num:
            s = mid + 1
        # down일 때
        elif arr[mid] > num:
            e = mid - 1
    if flag:
        print(1)
    else:
        print(0)