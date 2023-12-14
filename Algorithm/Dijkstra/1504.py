# 특정한 최단 경로: 골드 4

"""
- 양방향 그래프
- 1~N 최단 거리 이동
    - 임의로 주어진 두 정점은 반드시 통과해야 함
    - 한 번 이동했던 정점, 간선 재이동 가능(BUT 최단경로여야 함)

- 가중치가 있고, 최단 거리를 이동해야 하므로 다잌스트라

1. 시작 -> v1 -> v2 -> 끝
2. 시작 -> v2 -> v1 -> 끝

각 구간의 최단 경로를 구하고 더한다.

"""
from collections import defaultdict
import heapq
import sys

input = sys.stdin.readline


def dijkstra(start, end):
    dist = [int(1e9)] * (n + 1)
    dist[start] = 0
    q = [(0, start)]

    while q:
        distance, node = heapq.heappop(q)

        if distance > dist[node]:
            continue

        for nxt_node, nxt_cost in graph[node]:
            if dist[nxt_node] > dist[node] + nxt_cost:
                dist[nxt_node] = dist[node] + nxt_cost
                heapq.heappush(q, (dist[nxt_node], nxt_node))

    return dist[end]


n, e = map(int, input().split())
graph = defaultdict(list)
for _ in range(e):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))
    graph[b].append((a, c))
v1, v2 = map(int, input().split())  # flag를 심어서, 두 간선을 지나면, True입력하기

path1 = dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, n)
path2 = dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, n)

if path1 >= int(1e9) and path2 >= int(1e9):
    print(-1)
else:
    print(min(path1, path2))
