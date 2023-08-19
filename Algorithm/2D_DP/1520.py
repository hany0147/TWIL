# 1520 내리막 길: 골드 3
def recur(x, y):
    if x == N - 1 and y == M - 1:
        return 1
    
    if dp[x][y] != -1:
        return dp[x][y]
    
    route = 0
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < M:
            if graph[x][y] > graph[nx][ny]:
                route += recur(nx, ny)
    dp[x][y] = route
    return dp[x][y]

N, M = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]
dp = [[-1] * M for _ in range(N)]
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

answer = recur(0, 0)
print(answer)