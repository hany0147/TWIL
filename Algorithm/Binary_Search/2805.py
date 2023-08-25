# 나무 자르기: 실버2
n, m = map(int, input().split())
trees = list(map(int, input().split()))

s = 0
e = max(trees)

while s <= e:
    mid = (s + e) // 2
    branch = 0
    for tree in trees:
        if mid <= tree:
            branch += tree - mid
    # 원하는 만큼 얻었다면,
    if branch >= m:
        s = mid + 1
    # 많이 얻었다면,
    else:
        e = mid - 1
print(e)



