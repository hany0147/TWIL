# 백준 10813번: 공 바꾸기
## 접근 방법
'''
1. deque를 불러낸다.
2. 인덱스(n)를 헷갈리지 않게 표기하기위해 0을 채워넣고 시작한다.
3. 서로 바꿔준다.
4. 리스트를 출력한다.
'''
from collections import deque
n, m = map(int, input().split())
n_lst = []

for x in range(n + 1):
    n_lst.append(x)
print(n_lst)

for _ in range(m):
    i, j = map(int, input().split())
    n_lst[i] = j
    n_lst[j] = i
print(*n_lst)
