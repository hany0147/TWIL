# BFS

'''
Breadth-First Search, 너비 우선 탐색
"시작 정점으로부터 가까이에 있는 정점"부터 방문하는 탐색 방식
탐색 후보에 먼저 들어간 순서대로 정점을 방문하므로 "큐"를 이용해서 구현함

BFS는 주로 모든 간선의 가중치가 동일한 그래프에서 최단 거리를 구할 때 사용함
'''

from collections import deque

N, M = map(int, input().split())
visited = [0 for _ in range(N + 1)]
graph = [[] for _ in range(N + 1)]
for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

Q = deque()

# 1번 정점부터 탐색 시작
visited[1] = 1
Q.append(1)

# 큐에 있는 정점이 모두 없어 질 때까지 while문 반복(모든 정점을 한 번씩 방문할 때까지 반복)
while Q:
    # 가장 왼쪽에 있는 정점이 가장 먼저 들어간 정점
    cur = Q.popleft()
    # 다음으로 방문할 정점의 후보들 추가
    for next in graph[cur]:
        # 모든 정점을 한 번씩만 방문해야하므로, 이미 큐에 들어간 정점은 건너 뛰기
        if visited[next]:
            continue
        visited[next] = 1
        Q.append(next)
    print(f'현재 정점: {cur}, 다음에 방문할 정점 순서: {Q}')