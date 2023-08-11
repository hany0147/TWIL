# N과 M(6): 실버 3

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
        if tmp:
            if tmp[-1] > i:
                continue
        tmp.append(i)
        recur(number + 1)
        tmp.pop()

recur(0)