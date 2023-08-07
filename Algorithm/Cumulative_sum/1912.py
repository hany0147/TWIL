# 연속합: 실버 2
# DP
# 메모제이션


N = int(input())

prefix = [0 for _ in range(N + 1)]
arr = list(map(int, input().split()))

for i in range(N):
    prefix[i + 1] = max(prefix[i] + arr[i], arr[i])

prefix.pop(0)
print(max(prefix))