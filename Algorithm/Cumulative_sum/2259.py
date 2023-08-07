# 두더지 잡기 : 골드 2

a, b = map(int, input().split())
arr = list(map(int, input().split()))
prefix = [0 for _ in range(a + 1)]

for i in range(a):
    prefix[i + 1] = prefix[i] + arr[i]

answer = []
for k in range(b, a + 1):
    answer.append(prefix[k] - prefix[k - b])

print(max(answer))