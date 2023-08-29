# 보물선: 골드 5
from collections import deque
import sys
input = sys.stdin.readline

X, Y = map(int, input().split())
lands = [list(input().rstrip()) for _ in range(X)]
max_res = 0

# 전부 완전탐색 하면서
for x in range(X):
    for y in range(Y):
        # L인 경우, 멈춰서 bfs를 실행하고,
        if lands[x][y] == 'L':
            # 방문지와 거리 매번 초기화
            visited = [[0] * Y for _ in range(X)]
            distance = [[0] * Y for _ in range(X)]
            # 큐를 만들고, 큐에 첫 방문지를 넣고, 방문 체크도 한다.
            q = deque()
            q. append([x, y])
            visited[x][y] = 1

            # q가 다 빌 때까지
            while q:
                cx, cy = q.popleft()

                # 네 방향으로 이동
                for dx, dy in [[-1, 0], [1, 0], [0, -1], [0, 1]]:
                    nx = cx + dx
                    ny = cy + dy

                    # 범위 설정
                    # 방문한 적 없어야 하고 Land 여야 함.
                    if 0 <= nx < X and 0 <= ny < Y and visited[nx][ny] == 0 and lands[nx][ny] == 'L':
                        visited[nx][ny] = 1
                        distance[nx][ny] = max(distance[cx][cy] + 1, distance[nx][ny])
                        # 가장 거리가 먼 곳을 구하여 출력한다.
                        if max_res < distance[nx][ny]:
                            max_res = distance[nx][ny]
                        q.append([nx, ny])
print(max_res)



