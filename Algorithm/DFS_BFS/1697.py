# 숨바꼭질 : 실버 1
from collections import deque

def bfs():
    q = deque()
    q.append(n)

    while q:
        x = q.popleft()
        if x == k:
            print(dist[k])
            break
        for nx in (x - 1, x + 1, 2 * x):
            if 0 <= nx <= MAX:
                if not dist[nx]:
                    dist[nx] = dist[x] + 1
                    q.append(nx)

n, k = map(int, input().split())
MAX = 100_000
dist = [0] * (MAX + 1)

bfs()