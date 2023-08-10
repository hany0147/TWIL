# 2304번 창고 다각형 : 실버2
'''
x좌표의 가장 큰 것과 가장 작을 것의 면적을 구하고 누적합한다.
'''

n = int(input())
info = [0] * 1001
x_lst = []
y_lst = []
for _ in range(n):
    l, h = map(int, input().split())
    info[l] = h
    x_lst.append(l)
    y_lst.append(h)

max_h = max(y_lst)
max_l = max(x_lst)

prefix = [0] * (max_l + 2)
suffix = [0] * (max_l + 2)

max_point = []

h = 0
for i in range(1, max_l + 3):
    if info[i] == max_h:
        max_point.append(i)
        break
    h = max(h, info[i])
    prefix[i] = prefix[i - 1] + h

h = 0
for i in range(max_l, 0 , -1):
    if info[i] == max_h:
        max_point.append(i)
        break
    h = max(h, info[i])
    suffix[i] = suffix[i + 1] + h

ans = max(prefix) + max(suffix)
ans += (max_point[1] - max_point[0] + 1) * max_h

print(ans)