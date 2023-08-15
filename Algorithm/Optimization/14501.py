# 퇴사: 실버 3

N = int(input())
call = [[] for _ in range(N + 1)]
for i in range(N):
    a, b = map(int, input().split())
    call[i + 1] = [a, b]
ans = 0

def recur(idx, p):
    global ans
    # 상담 시간이 지나면 return한다.
    if idx > N:
        if idx > N + 1:
            return
        # 수익이 최대인 걸 택한다.
        ans = max(ans, p)
        return


    # 상담을 한다면,
    recur(idx + call[idx][0], p + call[idx][1])
    # 상담을 하지 않는다면,
    recur(idx + 1, p)

recur(1, 0)
print(ans)