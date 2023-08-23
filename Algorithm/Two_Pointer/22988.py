# 재활용 캠페인: 골드 2
n, x = map(int, input().split())
arr = sorted(list(map(int, input().split())))
cnt = 0
keep = 0
s = 0
e = n - 1

while s <= e:
    if arr[e] == x:
        cnt += 1
        e -= 1
        continue

    if s == e:
        keep += 1
        break

    if arr[s] + arr[e] >= x/2:
        cnt += 1
        s += 1
        e -= 1
    else:
        keep += 1
        s += 1

print(cnt + (keep // 3))