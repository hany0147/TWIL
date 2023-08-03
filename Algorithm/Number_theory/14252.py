# 공약수열: 플래티넘 4

def gcd(a, b):
    while a % b != 0:
        tmp = a % b
        a = b
        b = tmp
    return b

n = int(input())
numbers = sorted(list(map(int, input().split())))
cnt  = 0

for i in range(len(numbers) - 1):
    a, b = numbers[i], numbers[i + 1]
    
    if gcd(b, a) == 1:
        continue
        
    for i in range(a + 1, b):
        if gcd(i, a) == 1 and gcd(b, i) == 1:
            cnt += 1
            break
        if i == b - 1:
            cnt += 2

print(cnt)