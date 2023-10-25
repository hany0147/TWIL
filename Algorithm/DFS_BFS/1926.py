# 그림: 실버1
import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

def dfs(x, y):
    global size
    paper[x][y] = 2
    size += 1

    for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
        nx = x + dx
        ny = y + dy
        if 0 <= nx < n and 0 <= ny < m:
            if paper[nx][ny] == 1:
                dfs(nx, ny)

n, m = map(int, input().split())
paper = [list(map(int, input().split())) for _ in range(n)]
visited = [[0] * m for _ in range(n)]
cnt = 0
max_size = 0
size = 0

for x in range(n):
    for y in range(m):
        if paper[x][y] == 1:
            size = 0
            dfs(x, y)
            max_size = max(max_size, size)
            cnt += 1
print(cnt)
print(max_size)