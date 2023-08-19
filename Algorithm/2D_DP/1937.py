import sys
sys.setrecursionlimit(10000000)

def recur(x, y):
    # 이미 간적이 있다면,
    if dp[x][y] != 0:
        return dp[x][y]
    
    # 해당하는지 
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < N:
            if graph[x][y] < graph[nx][ny]:
                dp[x][y] = max(recur(nx, ny) + 1, dp[x][y])
        
    # 해당하지 않는다면,
    return dp[x][y]

N = int(input())
graph = [list(map(int, input().split())) for _ in range(N)]
dp = [[0] * N for _ in range(N)]
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for x in range(N):
    for y in range(N):
        recur(x, y)
print(max(map(max, dp)) + 1)