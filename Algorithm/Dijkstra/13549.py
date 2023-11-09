# 숨바꼭질 3: 골드 5

from collections import deque

n, k = map(int, input().split())
MAX = 100_000
dist = [-1] * (MAX + 1)
q = deque()
q.append(n)
dist[n] = 0
while q:
    x = q.popleft()

    if x == k:
        print(dist[k])
        break

    if 0 <= x - 1 <= MAX and dist[x - 1] == -1:
        dist[x - 1] = dist[x] + 1
        q.append(x - 1)

    if 0 <= x * 2 <= MAX and dist[x * 2] == -1:
        dist[x * 2] = dist[x]
        q.appendleft(x * 2)
    if 0 <= x + 1 <= MAX and dist[x + 1] == -1:
        dist[x + 1] = dist[x] + 1
        q.append(x + 1)

