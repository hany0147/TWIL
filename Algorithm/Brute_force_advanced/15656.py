# N과 M(7): 실버3
N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
tmp = []

def recur(number):
    if number == M:
        print(*tmp)
        return
    
    for i in arr:
        tmp.append(i)
        recur(number + 1)
        tmp.pop()

recur(0)