# N과 M(2): 실버3
'''
for x in range(1, N + 1):
    for y in range(x + 1, N + 1):
        for w in range(y + 1, N + 1):
            for z in range(w + 1, N + 1):
                print(x, y, w, z)
'''

N, M = map(int, input().split())
arr = []
def recur(number, k):
    if number == M:
        print(*arr)
        return
    
    for i in range(k + 1, N + 1):
        arr.append(i)
        recur(number + 1, i)
        arr.pop()

recur(0, 0)