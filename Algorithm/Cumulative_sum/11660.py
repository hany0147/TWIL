# 11660번

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
# prefix 초기화
prefix = [[0 for _ in range(n + 1)] for _ in range(n + 1)]

for x in range(n):
    for y in range(n):
        prefix[x + 1][y + 1] = prefix[x][y + 1] + prefix[x + 1][y] + graph[x][y] - prefix[x][y]

for _ in range(m):
    x1, y1, x2, y2 = map(int, input().split())
    ans = prefix[x2][y2] - prefix[x2][y1 - 1] - prefix[x1 - 1][y2] + prefix[x1 - 1][y1 - 1]
    print(ans)