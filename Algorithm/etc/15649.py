# 15649번 N과 M(1)
'''
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
'''

# 고려해야 할 조건
# 1. 수열의 길이가 M을 넘어서는 안 된다(<=)
# 2. 배열 내 중복 숫자가 있어선 안된다

# 재귀의 성격을 띤다. 재귀는 탈출 조건이 필요하다.
# M에 도달했을 때, return
# 사전 순은 for문으로 해결, 중복은 for문 내 if문으로 해결
    # if문으로 그 수가 배열 내에 존재하는 지 여부를 가리고, 없다면 추가, 있다면 넘기기

N, M = map(int, input().split())
answer = []

def back():
    if len(answer) == M: # 탈출조건
        print(" ".join(map(str, answer))) # 탈출할 때, 답을 도출하기 위함
        return # 함수에서 탈출
    for i in range(1, N + 1): # 1~N까지
        if i not in answer: # 중복확인
            answer.append(i) # 없으니 추가
            back() # 재귀
            answer.pop() #return으로 돌아오면 이게 실행됨. 1, 2, 3일 때 3을 없앰으로 전 단계로 돌아가는 것.
back()

# return의 기능
# 1. 결과값 반환
# 2. 함수를 빠져나가는 기능