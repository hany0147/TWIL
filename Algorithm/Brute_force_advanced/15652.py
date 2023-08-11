# N과 M(4): 실버3
# N과 M(4): 실버3

'''
for x in range(1, N + 1):
    for y in range(x, N + 1):
        for z in range(y, N + 1):
            print(x, y, z)
'''
N, M = map(int, input().split())
arr = []

def recur(number, k):
    if number == M:
        print(*arr)
        return
    
    for i in range(k, N + 1):
        arr.append(i)
        recur(number + 1, i)
        arr.pop()

recur(0, 1)

