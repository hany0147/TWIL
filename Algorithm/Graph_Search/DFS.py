# DFS

'''
Depth-First Search, 깊이 우선 탐색
- 스택 사용
- 스택의 원리와 동일하게 동작하는 재귀 함수 이용 가능
- 이진 트리 탐색, 백트래킹 구현 때 주로 씀
'''
from collections import deque

N, M = map(int, input().split())
V = [0 for _ in range(N + 1)]
G = [[] for _ in range(N + 1)]
for _ in range(M):
    a, b = map(int, input().split())
    G[a].append(b)
    G[b].append(a)

ST = []

def DFS(cur):
    print(f'현재 정점: {cur}, 현재 탐색하고 있는 경로: {ST}')
    
    for next in G[cur]:
        if V[next]:
            continue

        ST.append(next)
        V[next] = 1
        DFS(next) # 재귀

    ST.pop()
    print(f'더 탐색할 수 있는 경로가 없으므로 pop, 현재 탐색하고 있는 경로: {ST}')

ST.append(1)
V[1] = 1
DFS(1)