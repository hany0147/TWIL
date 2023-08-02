# 1407: 2로 몇 번 나누어질까 (골드 4)

# 모든 숫자를 while로 2로 나눠서 나머지 0이 안나올때까지 전부해본다면?


## 입력값의 범위를 염두해야한다.
## 10 ** 15
## 1. 시간 초과 뜸 (완전탐색 접근)
# b, b = map(int, input().split())
# res = 0
# for number in range(a, b + 1):
#     cnt = 0
#     while True:
#         # 언제까지?
#         if number % 2 != 0:
#             break
#         # 이후 계산
#         elif number % 2 == 0:
#             cnt += 1
#             number = number // 2

#     # while True를 벗어나면
#     res += 2 ** cnt

# print(res)

## 2. 정수론 아이디어(최적화)
a, b = map(int, input().split())
a -= 1
tmp_a = 0

tmp_a += a

for i in range(1, 99):
    tmp_a += (a // (2 ** i)) * ((2 ** i) - (2 ** (i - 1)))


tmp_b = 0

tmp_b += b

for i in range(1, 99):
    tmp_b += (b // (2 ** i)) * ((2 ** i) - (2 ** (i - 1)))

print(tmp_b - tmp_a)

## 3. 함수로 최적화
a, b = map(int, input().split())
a -= a