# 2436 공약수

# def _gcd(a, b):
#     while a % b  != 0: # 나머지가 0이 되는 순간 멈춘다. 
#         tmp = a % b
#         a = b
#         b = tmp
#     return b

# def _lcm(a, b):
#     return a * b // _gcd(a, b)

def _gcd(a, b):
    while a % b  != 0: # 나머지가 0이 되는 순간 멈춘다. 
        tmp = a % b
        a = b
        b = tmp
    return b

g, l = map(int, input().split())
div = l // g
a, b = 1, div

for i in range(1, div // 2 + 1):
    if div % i == 0:
        c = i
        d = div // i
        if _gcd(c, d) != 1:
            continue
        if a + b > c + d:
            a = c
            b = d
print(a * g, b * g)