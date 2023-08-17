N, K = map(int, input().split())
items = [[0, 0]]
for i in range(N):
    a, b = map(int, input().split())
    items.append([a, b])
dp = [[0 for _ in range(K + 1)] for _ in range(N + 1)]
for i in range(1, N + 1):
    for j in range(1, K + 1):
        weight = items[i][0]
        value = items[i][1]
        if j < weight:
            dp[i][j] = dp[i - 1][j]
        else:
            dp[i][j] = max(dp[i - 1][j - weight] + value, dp[i - 1] [j])

print(dp[N][K])

