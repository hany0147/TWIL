# 최단경로: 골드 4
import heapq
import sys
input = sys.stdin.readline

V, E = map(int, input().split())
K = int(input())
graph = [[] for _ in range(V + 1)]
for _ in range(E):
    u, v, w = map(int, input().split())
    graph[u].append([v, w])
dist = [1e9 for _ in range(V + 1)]

q = []
heapq.heappush(q, [0, K])
dist[K] = 0

while q:
    # 큐를 빼내고,
    tmp_weight, cur = heapq.heappop(q)
    # 그래프에 뿌린 다음,
    for nxt, weight in graph[cur]:
        # 해당 정점의 거리와 가중치를 더한 것이, 다음 정점의 거리보다 적다면,
        if dist[cur] + weight < dist[nxt]:
            # 다음 정점의 거리는 현 정점의 거리 + 가중치
            dist[nxt] = dist[cur] + weight
            # 그리고 해당 정점과 거리를 큐에 넣기
            heapq.heappush(q, [dist[nxt], nxt])

for i in range(1, V + 1):
    if dist[i] == 1e9:
        print('INF')
    else:
        print(dist[i])