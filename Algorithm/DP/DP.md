# 동적계획법(Dynamic Programming)
- 하나의 큰 문제를 여러 개의 작은 문제로 나누어서 그 결과를 저장하여 다시 큰 문제를 해결할 때 사용
- 하나의 문제해결 패러다임(알고리즘이라기 보단)
> 큰 문제를 작은 문제로 쪼개서 그 답을 저장해두고 재활용한다

## 사용 목적
- 일반 재귀와 다르게 데이터를 재활용함으로써 시간복잡도를 단축한다.

## 사용 조건
1. 겹치는 부분 문제
    - 동일한 작은 문제들이 반복하여 나타나는 경우에 사용 가능
2. 최적 부문 구조
    - 부분 문제의 최적 결과 값을 사용해 전체 문제의 최적 결과를 낼 수 있는 경우

## 구현 방법
1. Bottom-Up 방식(Tabulation): **반복문** 사용
```python
def fibonacci_dp(num):
    f = [0, 1]
    for i in range(2, num+1):
        f.append(f[i-1] + f[i-2])
    return f
```
2. Top-Down 방식(Memorization): **재귀** 사용
```python
def fibonacci_memoi(num):
    global memo
    if num >= 2 and len(memo) <= num:
        memo.append(fibonacci_memoi(num-1) + fibonacci_memoi(num-2))
    return memo[num]
memo = [0, 1]
```