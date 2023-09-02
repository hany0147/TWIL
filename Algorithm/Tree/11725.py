# 트리의 부모 찾기: 실버2

import sys
input = sys.stdin.readline
sys.setrecursionlimit(1000000)

def recur(node):
    for nxt in tree[node]:
        if parent[nxt] == 0:
            parent[nxt] = node    
            recur(nxt)


n = int(input())
parent = [0 for _ in range(n + 1)]
tree = [[] for _ in range(n + 1)]
for _ in range(n - 1):
    a, b = map(int, input().split())
    tree[a].append(b)
    tree[b].append(a)

recur(1)
for i in parent[2:]:
    print(i)
