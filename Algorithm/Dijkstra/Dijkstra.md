# 다익스트라 최단 경로 알고리즘
```md
- 이번 스터디의 주제는 다익스트라 최단 경로 알고리즘(줄여서 이하, 다익스트라)이다.
- 다익스트라의 특징은 아래와 같다.
1. 하나의 최단 거리를 구할 때 그 이전까지 구했던 최단 거리 정보를 그대로 사용
    - 현재까지 알고 있던 최단 경로를 계속해서 갱신
2. 그리디 알고리즘 + DP
3. 간선의 가중치에 음수가 있으면 안됨
### 동작 방식
1. 출발 노드를 설정하고, 최단 거리 테이블을 초기화
2. 방문하지 않은 노드 중 최단 거리가 가장 짧은 노드를 선택
3. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블을 갱신
4. 갱신: 현재 테이블의 최단거리보다, 해당 노드를 거쳐가는 비용이 작으면 작은 경로로 교체
> 3~4의 과정을 반복한다.
```
----
```python
# 코드 구현

import sys
input = sys.stdin.readline

# 무한을 의미(10억이 파이썬에서 최대값)
INF = int(1e9)
# 노드의 개수, 간선의 개수
n, m = map(int, input().split())
# 시작 노드 번호 입력 받기
start = int(input()) 
# 각 노드에 연결되어 있는 노드에 대한 정보를 담은 리스트 만들기
graph = [[] for i in range(n + 1)]
# 방문 체크
visited = [False] * (n + 1)
# 최단 거리 테이블 `무한`으로 초기화(핵심 포인트!!)
distance = [INF] * (n + 1)

# 모든 간선 정보 입력 받기
for _ in range(m):
    # a번 노드에서 b번 노드로 가는 비용이 c
    a, b, c = map(int, input().split())
    # a행에 튜플형식으로 (b, c) 넣기
    graph[a].append((b, c))

# 방문하지 않은 노드 중, 최단 거리가 가장 짧은 `노드 번호` 반환
def get_smallest_node():
    min_value = INF
    index = 0 # 최단 거리가 가장 짧은 노드(인덱스)
    for i in range(1, n + 1):
        # 해당 인덱스의 최단거리가 최솟값보다 작고 방문한 적이 없다면
        if distance[i] < min_value and not visited[i]:
            # 최솟값 갱신
            min_value = distance[i]
            index = i
    return index

def dijkstra(start):
    # 시작 노드에 대해서 초기화
    distance[start] = 0
    visited[start] = True
    for j in graph[start]:
        # j[0] = b 노드, j[1] = 비용 c
        distance[j[0]] = j[1]

    # 시작 노드를 제외한 전체 n - 1개의 노드에 대해 반복
    for i in range(n - 1):
      # 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
      now = get_smallest_nod()
      visited[now] = True
      # 현재 노드와 연결된 다른 노드를 확인
      for j in graph[now]:
          # 현재 노드 - 다른 노드 총 거리
          cost = distance[now] + j[1]
          # 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
          if cost < distance[j[0]]:
            distance[j[0]] = cost

# 다익스트라 알고리즘 수행
dijkstra(start)

# 모든 노드로 가기 위한 최단 거리를 출력
for i in range(1, n + 1):
    # 도달 할 수 없는 경우, 무한 출력
    if distance[i] == INF:
        print("INFINITY")
    # 도달 할 수 있는 경우 거리 출력
    else:
        print(distance[i])
```
- 5000개 이상의 노드에는 상기의 코드는 무리
- 따라서 `우선순위 큐(heapq)`를 이용하여 푼다.

### Heap 구현
```python
import heapq
INF = int(1e9)

n, m = map(int, input().split())
start = int(input())
graph = [[] for i in range(n + 1)]
visited = [False] * (n + 1)
distance = [INF] * (n + 1)

for _ in range(m):
    a,b,c = map(int, input().split())
    graph[a].append((b,c))

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0

    while q:
        dist, now = heapq.heappop(p)
        if distance[now] < dist:
            continue
        for i in graph[now]:
            cost = dist + i[1]
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(start)

for i in range(1, n + 1):
    if distance[i] == INF:
        print('INF')
    else:
        print(distance[i])
```         