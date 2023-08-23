# 두 수의 합 : 실버3

n = int(input())
arr = sorted(list(map(int, input().split())))
x = int(input())

s = 0
e = n - 1
cnt = 0

while s < e:
    if arr[s] + arr[e] == x:
        cnt += 1
    if arr[s] + arr[e] >= x:
        e = e - 1
    else:
        s = s + 1

print(cnt)