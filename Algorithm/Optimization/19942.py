# 다이어트: 골드5

def cook(idx, p, f, s, v, c):
    global ans
    global arr
    global ans_arr
    # 우선 최소 영양소를 충족하고,
    if p >= mp and f >= mf and s >= ms and v >= mv:
        if ans > c:
            ans = c
            ans_arr = []
            for i in arr:
                ans_arr.append(i)
    
    # idx를 다 채우면 넘어간다.
    if idx == N:
        return
    
    arr.append(idx + 1)
    cook(idx + 1, p + ingre[idx][0], f + ingre[idx][1], s + ingre[idx][2], v + ingre[idx][3], c + ingre[idx][4])
    arr.pop()
    cook(idx + 1, p, f, s, v, c)

N = int(input())
mp, mf, ms, mv = map(int, input().split())
ingre = [list(map(int, input().split())) for _ in range(N)]
arr = []
ans = 99999999999999
ans_arr = []    

cook(0, 0, 0, 0, 0, 0)
if ans_arr:
    print(ans)
    print(*ans_arr)
else:
    print(-1)