# 평범한 배낭 : 골드 5

N, K = map(int, input().split())
items = [list(map(int, input().split())) for _ in range(N)]
ans = 0
def recur(idx, weight, value):
    global ans

    if weight >= K:
        if weight > K:
            return
        ans = max(ans, value)
        return
    
    if idx == N:
        return

    # 넣는다
    recur(idx + 1, weight + items[idx][0], value + items[idx][1])
    # 안 넣는다.
    recur(idx + 1, weight, value)

recur(0, 0, 0)
print(ans)