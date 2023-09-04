# 토마토 : 골드 5
import sys
input = sys.stdin.readline
from collections import deque

n, m = map(int, input().split())
box = [list(map(int, input().split())) for _ in range(m)]
day = [[0] * m for _ in range(n)]
q = deque()

for x in range(m):
    for y in range(n):
        if box[x][y] == 1:
            q.append([x, y])

def bfs():
    while q:
        cx, cy = q.popleft()

        for dx, dy in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
            nx, ny = cx + dx, cy + dy
            if 0<= nx < m and 0<= ny < n:
                if box[nx][ny] == 0:
                    box[nx][ny] = box[cx][cy] + 1
                    q.append([nx, ny])

bfs()

ans = 0
for i in box:
    if 0 in i:
        print(-1)
        exit(0)
    ans = max(max(i), ans)
print(ans - 1)
