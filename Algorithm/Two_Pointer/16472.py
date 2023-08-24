# 고냥이: 골드4
n = int(input())
arr = list(input())

s = 0
e = 0
dist = 0
letters = []
letters.append(arr[s])

# s와 e가 arr의 길이를 넘어서면 끝난다.
while s < len(arr) and e < len(arr):
    # print('s:', s, 'e:', e, 'letters:', letters)
    # dist에 max값만 저장한다.
    dist = max(dist, e - s + 1)

    # letters의 길이가 n보다 작거나 같으면, e를 전진시킨다.
    if len(letters) <= n:
        e += 1

        # 그런데 여기서 e가 범위를 넘어서지 않고,
        # arr[e]가 letters 안에 없다면,
        # 추가한다.
        if e < len(arr) and arr[e] not in letters:
            letters.append(arr[e])
        
    # letters의 길이가 n보다 커진다면,
    if len(letters) > n:
        # s를 전진시키고, 모두 초기화 시킨다.
        s += 1
        e = s
        letters = [arr[s]]

print(dist)