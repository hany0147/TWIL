# 나이트의 이동: 실버 1
from collections import deque
import sys
input = sys.stdin.readline

tc = int(input())
for _ in range(tc):
    l = int(input())

    chess = [[0] * l for _ in range(l)]

    sx, sy = map(int, input().split())
    ex, ey = map(int, input().split())

    q = deque()
    q.append([sx, sy])
    cnt = 0
    chess[sx][sy] = 1
    while q:
        x, y = q.popleft()
        if x == ex and y == ey:
            print(chess[x][y] - 1)
            break
        for nx, ny in [(x - 2, y - 1), (x - 2, y + 1), (x + 2, y - 1), (x + 2, y + 1), (x - 1, y - 2), (x - 1, y + 2), (x + 1, y - 2), (x + 1, y + 2)]:
            if 0 <= nx < l and 0 <= ny < l:
                if chess[nx][ny] == 0:
                    chess[nx][ny] = chess[x][y] + 1
                    q.append([nx, ny])