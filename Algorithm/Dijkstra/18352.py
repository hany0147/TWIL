# 특정 거리의 도시 찾기: 실버2

"""
- n: 도시 개수, m: 단방향 도로, 도로의 거리 1
- 출발 도시 x, 최단거리가 k인 도시들의 번호를 출력

1. 최단거리가 k인 도시만 출력한다(도로 거리가 전부 똑같으므로, 다익스트라를 쓸 필요없이
bfs 선에서 해결 가능)
"""
import sys
from collections import deque

input = sys.stdin.readline

n, m, k, x = map(int, input().split())
lst = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    lst[a].append(b)

q = deque()
q.append([x, 0])
visited = [0] * (n + 1)
visited[x] = 1
flag = False
result = []
while q:
    node, dist = q.popleft()

    if dist == k:
        result.append(node)
        flag = True

    for nxt_node in lst[node]:
        if not visited[nxt_node]:
            visited[nxt_node] = 1
            q.append([nxt_node, dist + 1])

result.sort()
if not flag:
    print(-1)
else:
    for i in result:
        print(i)
