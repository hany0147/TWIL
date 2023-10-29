# 벽 부수고 이동하기: 골드 3
## 3차원 행렬을 이용한다.
'''
visited[x][y][0] -> 벽 파괴 가능
visited[x][y][1] -> 벽 파괴 불가능
벽은 한 개만 부술 수 있음
'''
from collections import deque

def bfs(x, y, z):
    q = deque()
    q.append((x, y, z))

    while q:
        a, b, c = q.popleft()
        if a == n - 1 and b == m - 1:
            return visited[a][b][c]
        for i in range(4):
            nx = a + dx[i]
            ny = b + dy[i]
            if 0 <= nx < n and 0 <= ny < m:
                # 다음 이동할 곳이 벽이고, 벽 파괴기회를 사용하지 않은 경우
                if graph[nx][ny] == 1 and c == 0:
                    visited[nx][ny][1] = visited[a][b][0] + 1
                    q.append((nx, ny, 1))
                # 다음 이동할 곳이 벽이 아니고, 한 번도 방문하지 않은 곳이라면
                elif graph[nx][ny] == 0 and visited[nx][ny][c] == 0:
                    visited[nx][ny][c] = visited[a][b][c] + 1
                    q.append((nx, ny, c))

    return -1

n, m = map(int, input().split())
graph = []
visited = [[[0] * 2 for _ in range(m)] for _ in range(n)]
visited[0][0][0] = 1

for i in range(n):
    graph.append(list(map(int, input())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


print(bfs(0, 0, 0))

# def bfs(x, y):
#     q = deque()
#     q.append([x, y])
#     visited[x][y] = 1
#     while q:
#         cx, cy = q.popleft()
#         for i in range(4):
#             nx, ny = cx + dx[i], cy + dy[i]
#             if 0 <= nx < n and 0 <= ny < m:
#                 if visited[nx][ny] == 0 and matrix[nx][ny] == 0:
#                     q.append([nx, ny])
#                     visited[nx][ny] = visited[cx][cy] + 1

#     return visited[end_x][end_y]

# n, m = map(int, input().split())
# matrix = [list(map(int, list(input()))) for _ in range(n)]
# end_x, end_y = n - 1, m - 1
# dx = [-1, 1, 0, 0]
# dy = [0, 0, -1, 1]
# res = 0

# for i in range(n):
#     for j in range(m):
#         if matrix[i][j] == 1:
#             matrix[i][j] = 0
#             visited = [[0] * m for _ in range(n)]
#             res = max(bfs(0, 0), res)
#             matrix[i][j] = 1

# if res == 0:
#     print(-1)
# else:
#     print(res)
