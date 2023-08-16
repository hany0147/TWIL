# 냅색 

def recur(idx, weight):

    if weight > K:
        return -99999999999
 
    if idx == N:
        return 0
    
    if dp[idx][weight] != -1:
        return dp[idx][weight]

    dp[idx][weight] = max(recur(idx + 1, weight + items[idx][0]) + items[idx][1], recur(idx + 1, weight))

    return dp[idx][weight]
N, K = map(int, input().split())
items = [list(map(int, input().split())) for _ in range(N)]
dp = [[-1 for _ in range(100_001)] for _ in range(N)]

print(recur(0, 0))