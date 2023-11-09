# 2839번 설탕배달
'''
N킬로그램을 배달해야 한다.
봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다.
만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.
'''
n = int(input())
r = n // 5
c = n // 3

matrix = [[5001] * (c + 1) for _ in range(r + 1)]

for x in range(r + 1):
    for y in range(c + 1):
        if 5 * x + 3 * y == n:
            matrix[r][c] = min(matrix[r][c], x + y)

ans = 5001
for i in matrix:
    ans = min(ans, min(i))
if ans == 5001:
    print(-1)
else:
    print(ans)
# n = int(input())
# cnt = 0
# # 큰거로 나누는 게 이득 따라서 5 -> 3 순으로
# while True:
#     # print(n)
#     if 0<= n <= 2:
#         break

#     if n >= 5:
#         cnt += n // 5
#         n = n % 5
#     elif n >= 3:
#         cnt += n // 3
#         n = n % 3

# if n != 0:
#     print(-1)
# else:
#     print(cnt)