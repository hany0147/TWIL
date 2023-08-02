# 2503
# 영수: 수비, 민혁: 공격
# 영수가 생각하고 있을 가능성이 있는 수 => 경우의 수

n = int(input())
hint = [list(map(int, input().split())) for _ in range(n)]
ans = 0

for a in range(1, 10):
    for b in range(1, 10):
        for c in range(1, 10):

            # 숫자가 같으면 안됨
            if a == b or b == c or c == a:
                continue

            cnt = 0

            for arr in hint:
                number = arr[0]
                strike = arr[1]
                ball = arr[2]

                strike_cnt = 0
                ball_cnt = 0

                first = number // 100
                second = (number % 100) // 10
                third = (number % 10)

                # print(f'first: {first}, second: {second}, third: {third}')

                if a == first:
                    strike_cnt += 1
                if b == second:
                    strike_cnt += 1
                if c == third:
                    strike_cnt += 1
                
                if a == second or a == third:
                    ball_cnt += 1
                if b == first or b == third:
                    ball_cnt += 1
                if c == first or c == second:
                    ball_cnt += 1

                if strike_cnt != strike:
                    break
                if ball_cnt != ball:
                    break

                cnt += 1

            if cnt == n:
                ans += 1

print(ans)