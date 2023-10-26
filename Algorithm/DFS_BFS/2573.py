# 빙산 : 골드 4
from collections import deque
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]


# 한바퀴 돌면서, 녹일 얼음의 개수를 모은다.
def melt(x, y):
    cnt = 0
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < n and 0 <= ny < m:
            if graph[nx][ny] == 0:
                cnt += 1
    melting[x][y] = cnt


def bfs(x, y):
    q = deque()
    q.append((x, y))
    visited[x][y] = 1
    while q:
        cx, cy = q.popleft()
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < n and 0 <= ny < m:
                if graph[nx][ny] != 0 and visited[nx][ny] == 0:
                    visited[nx][ny] = 1
                    q.append((nx, ny))

def counting():
    count = 0       
    for x in range(n):
        for y in range(m):
            if graph[x][y] > 0 and not visited[x][y]:
                bfs(x, y)
                count += 1
    return count

year = 1
while True:
    melting = [[0] * m for _ in range(n)]
    visited = [[0] * m for _ in range(n)]
    
    for x in range(n):
        for y in range(m):
            if graph[x][y] > 0:
                melt(x, y)

    for x in range(n):
        for y in range(m):
            graph[x][y] = max(graph[x][y] - melting[x][y], 0)

    count = counting()

    if count >= 2:
        print(year)
        break
    if count == 0:
        print(0)
        break

    year += 1
