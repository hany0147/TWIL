# 1090 체커: 플래티넘 4
n = int(input())
arr = []
arr_x = []
arr_y = []

ans = [-1] * n

# 입력 받기
for _ in range(n):
    a, b = map(int, input().split())
    arr.append([a, b])
    arr_x.append(a)
    arr_y.append(b)

# 만날 장소 정하기

for x in arr_x:
    for y in arr_y:
        dist = []

        # 만날 장소로 각각 점들이 오는 비용 계산
        for ex, ey in arr:
            d = abs(ex - x) + abs(ey - y)
            dist.append(d)

        # 가까운 순서대로 정렬
        dist.sort()
        temp = 0

        for i in range(len(dist)):
            d = dist[i]
            temp += d

            if ans[i] == -1:
                ans[i] = temp
            else:
                ans[i] = min(temp, ans[i])
print(*ans)

