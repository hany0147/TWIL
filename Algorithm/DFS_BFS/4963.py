# 섬의 개수 : 실버 2
import sys
input = sys.stdin.readline
from collections import deque

while True:
    w, h = map(int, input().split())
    if w == 0 and h == 0:
        break
    island = []
    for _ in range(h):
        temp = list(map(int, input().split()))
        island.append(temp)
    visited = [[0] * w for _ in range(h)]
    q = deque()
    cnt = 0

    for x in range(h):
        for y in range(w):
            if island[x][y] == 1 and visited[x][y] == 0:
                q.append([x, y])
                visited[x][y] = 1
                cnt += 1
                while q:
                    nx, ny = q.popleft()
                    for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1), (-1, -1), (-1, 1), (1, -1), (1, 1)]:
                        cx = nx + dx
                        cy = ny + dy
                        if 0 <= cx < h and 0 <= cy < w :
                            if island[cx][cy] == 1 and visited[cx][cy] == 0:
                                visited[cx][cy] = 1
                                q.append([cx, cy])
    print(cnt)