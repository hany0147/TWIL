# 1816

N = int(input())

for _ in range(N):
    flag = False
    numbers = int(input())
    for n in range(2, (10**6 + 1)):
        if numbers % n == 0:
            print('NO')
            flag = True
            break
    if not flag:
        print('YES')
		
    