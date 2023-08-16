# 14501 상담

import sys
sys.setrecursionlimit(1000000000)

def recur(idx):
    # 퇴사날짜를 넘어섰다면, x
    if idx > N + 1:
        return -999999999999999999
    
    # 퇴사날짜에 도래했다면, 0을 반환
    if idx == N + 1:
        return 0

    # dp[idx]가 이미 채워졌다면,
    if dp[idx] != -1:
        return dp[idx]

    # 상담한 게 이득이면, 전자, 아니면 후자,
    dp[idx] = max(recur(idx + call[idx][0]) + call[idx][1], recur(idx + 1))

    return dp[idx]    

N = int(input())
call = [[] for _ in range(N + 1)]
for i in range(N):
    a, b = map(int, input().split())
    call[i + 1] = [a, b]
dp = [-1 for _ in range(N + 1)]

print(recur(1))