# RGB 거리: 실버 1
N = int(input())
colors = [list(map(int, input().split())) for _ in range(N)]
dp = [[0, 0, 0] for _ in range(N + 1)]

for i in range(1, N + 1):
    for color in range(3):
        if color == 0: # Red
            dp[i][color] = min(dp[i - 1][1], dp[i - 1][2]) +colors[i - 1][color]
        if color == 1: # Green
            dp[i][color] = min(dp[i - 1][0], dp[i - 1][2]) +colors[i - 1][color]
        if color == 2: # Blue
            dp[i][color] = min(dp[i - 1][0], dp[i - 1][1]) +colors[i - 1][color]
print(min(dp[-1]))