# N과 M(5): 실버 3
'''
for x in arr:
    for y in arr:
        if x == y:
            continue
        print(x, y)
'''
N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
tmp = []

def recur(number):
    if number == M:
        print(*tmp)
        return
    
    for i in arr:
        if i in tmp:
            continue
        tmp.append(i)
        recur(number + 1)
        tmp.pop()

recur(0)