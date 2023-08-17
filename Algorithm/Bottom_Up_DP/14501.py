N = int(input())
call = [list(map(int, input().split())) for _ in range(N)]
dp = [0 for _ in range(N + 1)]
for idx in range(N - 1, -1, -1):
    if idx + call[idx][0] > N:
        dp[idx] = dp[idx + 1]
    else:
        dp[idx] = max(dp[idx + call[idx][0]] + call[idx][1], dp[idx + 1])

print(dp[0])