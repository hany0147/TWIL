# 숫자야구(실버3)
import sys
sys.setrecursionlimit(100000)

N = int(input())
hint = []
for _ in range(N):
    tmp = list(map(int, input().split()))
    hint.append(tmp)
ans = 0

def strike_and_ball(number, hint_idx):
    strike_cnt = 0
    ball_cnt = 0

    a = number // 100
    b = (number % 100) // 10
    c = (number % 100) % 10

    hint_number = hint[hint_idx][0]
    hint_strike = hint[hint_idx][1]
    hint_ball = hint[hint_idx][2]

    hint_a = hint_number // 100
    hint_b = (hint_number % 100) // 10
    hint_c = (hint_number % 100) % 10

    # 제약조건
    if a == 0 or b == 0 or c == 0:
        return False
    if a == b or b == c or a == c:
        return False
    
    if a == hint_a:
        strike_cnt += 1
    if b == hint_b:
        strike_cnt += 1
    if c == hint_c:
        strike_cnt += 1

    if a == hint_b or a == hint_c:
        ball_cnt += 1
    if b == hint_a or b == hint_c:
        ball_cnt += 1
    if c == hint_a or c == hint_b:
        ball_cnt += 1        

    if strike_cnt == hint_strike and ball_cnt == hint_ball:
        return True
    
    return False


def baseball(hint_idx, number):
    global ans

    if hint_idx == N:
        ans += 1
        baseball(0, number + 1)
        return
    
    if number == 1000:
        return
    
    # 만약 힌트에 통과했다면,
    if strike_and_ball(number, hint_idx):
        baseball(hint_idx + 1, number)
    # 만약 힌트에 통과하지 않았다면,
    else:
        baseball(0, number + 1)

baseball(0, 100)
print(ans)