# 도영이가 만든 맛있는 음식 : 실버 2

def cook(idx, S, B, use):
    global ans

    if idx == N:
        if use > 0:
            res = abs(S - B)
            ans = min(ans, res)
        return
    
    cook(idx + 1, S * ingre[idx][0], B + ingre[idx][1], use + 1)
    cook(idx + 1, S, B, use)


N = int(input())
ingre = [list(map(int, input().split())) for _ in range(N)]
ans = 999999999999

cook(0, 1, 0, 0)
print(ans)
