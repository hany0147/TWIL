# 인구 이동: 골드 4
"""
인구이동방법
1. L <= 인구차이 <= r -> 공유 국경선을 하루 연다.
2. 열어야하는 국경선이 모두 열리면 인구이동 시작
3. 열려있으면, 연합이라 불림
4. 연합의 각 칸 인구수 = 연합 인구수 / 연합을 이루고 있는 칸의 개수
"""

"""
코드관점(BFS)
1. 주변부와 인구차를 계산한다(좌우위아래).
2. 인구이동방법 1번에 해당하면, 국경선(1=True)로 켜고,
3. 연결되어 있다면, 연결된 칸의 개수를 세고 해당 인구수를 더하여, 평균을 구한다.(int())
4. 위를 반복한다. 만약, 하나라도 열리지 않는다면 끝낸다().
"""
import sys
from collections import deque

input = sys.stdin.readline

N, L, R = map(int, input().split())

countries = []
for _ in range(N):
    tmp = list(map(int, input().split()))
    countries.append(tmp)

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]


def bfs(a, b):
    q = deque()
    temp = []
    q.append((a, b))
    temp.append((a, b))

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < N and 0 <= ny < N:
                if not visited[nx][ny]:
                    if L <= abs(countries[nx][ny] - countries[x][y]) <= R:
                        visited[nx][ny] = True
                        q.append((nx, ny))
                        temp.append((nx, ny))

    return temp


day = 0

while True:
    visited = [[False] * N for _ in range(N)]
    moved = False
    for r in range(N):
        for c in range(N):
            if not visited[r][c]:
                visited[r][c] = True
                moving = bfs(r, c)

                if len(moving) > 1:
                    moved = True
                    result = sum([countries[x][y] for x, y in moving]) // len(moving)
                    for a, b in moving:
                        countries[a][b] = result

    if not moved:
        print(day)
        break

    day += 1
