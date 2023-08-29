# 바이러스 : 실버 3

## DFS
n = int(input())
m = int(input())
networks = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    networks[a].append(b)
    networks[b].append(a)
visited = [0] * (n + 1)
def recur(node):
    visited[node] = 1

    for nxt in networks[node]:
        if visited[nxt] == 1:
            continue
        recur(nxt)

recur(1)
print(sum(visited) -1)

## BFS
from collections import deque
n = int(input())
m = int(input())
networks = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    networks[a].append(b)
    networks[b].append(a)
visited = [0] * (n + 1)

q = deque()
visited[1] = 1
q.append(1)

while q:
    current = q.pop()

    for nxt in networks[current]:
        if visited[nxt] == 1:
            continue
        visited[nxt] = 1
        q.append(nxt)
print(sum(visited) - 1)