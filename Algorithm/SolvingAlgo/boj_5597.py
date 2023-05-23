# 백준 5597번: 과제 안 내신 분...?
## 접근방법
'''
1. 입력값을 리스트로 받는다.
2. range(1, 31) for문으로 돌려, 해당 값이 입력값 리스트 안에 포함(in)되는 지 여부를 확인한다.
3. 포함되어 있지 않다면, 그 번호를 print한다.
4. 이 순서대로 프린트하면 작은 수부터 출력된다
'''
students = []
for i in range(28):
    students.append(int(input()))
# print(students)
for n in range(1, 31):
    if n not in students:
        print(n)