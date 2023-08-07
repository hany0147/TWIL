
graph = [list(map(int, input().split())) for _ in range(4)]

x1, y1, x2, y2 = map(int, input().split())

prefix = [[ 0 for _ in range(5)] for _ in range(5)]

for x in range(4):
    for y in range(4):
        prefix[x + 1][y + 1] = prefix[x][y + 1] + prefix[x + 1][y] - prefix[x][y] - graph[x][y]


answer = prefix[x2][y2] - prefix[x2][y2 - 1] - prefix[x2 - 1][y2] + prefix[x1 - 1][y1 - 1]
print(answer)