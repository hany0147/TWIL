# enumerate 열거하다
# 여러가지 자료형을 인덱스를 포함한 enumerate 객체로 리턴

a = [1, 2, 3, 4, 5]
print(list(enumerate(a)))

for idx, num in enumerate(a):
    print(idx, num)