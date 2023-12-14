# 해킹: 골드 4
"""
n: 컴퓨터 개수, d: 의존성 개수(간선), c: 해킹당한 컴퓨터
a가 b를 의존하여, b가 감염되면 s초후 컴퓨터 a도 감염됨
b->a / s초

출력
총 감영되는 컴퓨터 수, 마지막 컴퓨터가 감염되기 까지 걸리는 시간

최단 경로를 구하면됨.
"""
from collections import defaultdict
import heapq
import sys

input = sys.stdin.readline


def dijkstra(start):
    infection = [INF] * (n + 1)
    infection[start] = 0
    q = [(0, start)]
    while q:
        time, node = heapq.heappop(q)

        if infection[node] < time:
            continue
        for nxt_node, need_time in graph[node]:
            if infection[nxt_node] > infection[node] + need_time:
                infection[nxt_node] = infection[node] + need_time
                heapq.heappush(q, (infection[nxt_node], nxt_node))

    max_time = 0
    cnt = 0
    for i in infection:
        if i != INF:
            cnt += 1
            max_time = max(max_time, i)

    return [cnt, max_time]


t = int(input())
for _ in range(t):
    n, d, c = map(int, input().split())
    graph = defaultdict(list)
    for _ in range(d):
        a, b, s = map(int, input().split())
        graph[b].append((a, s))
    INF = int(1e9)

    print(*dijkstra(c))
