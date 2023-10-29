# 트리 : 골드4


def dfs(num):
    arr[num] = - 2
    for i in range(len(arr)):
        if num == arr[i]:
            dfs(i)

n = int(input())
arr = list(map(int, input().split()))
delete_node = int(input())
cnt = 0

dfs(delete_node)
for i in range(len(arr)):
    if arr[i] != -2 and i not in arr:
        cnt += 1
print(cnt)