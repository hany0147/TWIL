# 미로탐색 : 실버 1
from collections import deque

def bfs(x, y):
    visited[x][y] = 1
    distance[x][y] = 1

    q = deque()
    q.append([x, y])

    while q:
        cx, cy = q.popleft()

        for dx, dy in [[1, 0], [-1, 0], [0, -1], [0, 1]]:
            nx = cx + dx
            ny = cy + dy
            if 0 <= nx < n and 0<= ny < m:
                if matrix[nx][ny] == '1':
                    if visited[nx][ny] == 0:
                        visited[nx][ny] = 1
                        distance[nx][ny] = max(distance[cx][cy] + 1, distance[nx][ny])
                        q.append([nx, ny])

                        if nx == n - 1 and ny == m - 1:
                            return distance[nx][ny]

n, m = map(int, input().split())
matrix = []
for i in range(n):
    tmp = list(input())
    matrix.append(tmp)
visited = [[0 for _ in range(m)] for _ in range(n)]
distance = [[0 for _ in range(m)] for _ in range(n)]

print(bfs(0, 0))