# 그림: 실버1
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
paper = [list(map(int, input().split())) for _ in range(n)]
visited = [[0] * m for _ in range(n)]

ans = 0
cnt = 0
def dfs(x, y):
    global cnt, ans
    for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
        nx = x + dx
        ny = y + dy

        if 0 <= nx < n and 0 <= ny < m:
            if paper[nx][ny] == 1 and visited[nx][ny] == 0:
                visited[nx][ny] = visited[x][y] + 1
                ans = max(ans, visited[nx][ny])
                dfs(nx, ny)
                
for x in range(n):
    for y in range(m):
        if paper[x][y] == 1:
            dfs(x, y)
            cnt += 1
print(cnt)
print(ans + 1)