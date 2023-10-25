# 연구소 : 골드4
from collections import deque
from copy import deepcopy
import sys
input = sys.stdin.readline

def make_wall(cnt):
    if cnt == 3:
        bfs()
        return
    for i in range(n):
        for j in range(m):
            if arr[i][j] == 0:
                arr[i][j] = 1
                make_wall(cnt + 1)
                arr[i][j] = 0

def bfs():
    global result
    cnt = 0
    q = deque()
    copy_arr = deepcopy(arr)
    
    for i in range(n):
        for j in range(m):
            if copy_arr[i][j] == 2:
                q.append((i, j))
    while q:
        cx, cy = q.popleft()
        
        for nx, ny in [(cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)]:
            if 0 <= nx < n and 0 <= ny < m:
                if copy_arr[nx][ny] == 0:
                    copy_arr[nx][ny] = 2
                    q.append((nx, ny))
    for x in range(n):
        for y in range(m):
            if copy_arr[x][y] == 0:
                cnt += 1
    result = max(result, cnt)


n, m = map(int, input().split())
arr = []
for _ in range(n):
    tmp = list(map(int, input().split()))
    arr.append(tmp)

result = 0
make_wall(0)
print(result)

# 추후에 조합으로도 풀어보자.