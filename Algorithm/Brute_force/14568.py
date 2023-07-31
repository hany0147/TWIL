# 14568

n = int(input())
cnt = 0 # 경우의 수 더하기 
# a 택희 b 영훈 c 남규

for a in range(1, n - 2):
    if a % 2 != 0:
        continue
    for b in range(1, n - a - 1):
        b = b
        for c in range(1, n - a - b + 1):
            if c < b + 2:
                continue
            if a + b + c == n:
                cnt += 1
print(cnt)