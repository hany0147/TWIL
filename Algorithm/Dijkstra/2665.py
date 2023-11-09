# 미로만들기: 골드 4
from collections import deque

n = int(input())
matrix = [list(map(int, list(input()))) for _ in range(n)]
visited = [[-1] * n for _ in range(n)]
q = deque()
q.append((0, 0))
visited[0][0] = 0
while q:
    x, y = q.popleft()
    if x == n - 1 and y == n - 1:
        print(visited[x][y])
        break

    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx = x + dx
        ny = y + dy
        if 0 <= nx < n and 0 <= ny < n and visited[nx][ny] == -1:
            # 흰방이면
            if matrix[nx][ny] == 1:
                q.appendleft((nx, ny))
                visited[nx][ny] = visited[x][y]
            else:
                q.append((nx, ny))
                visited[nx][ny] = visited[x][y] + 1
