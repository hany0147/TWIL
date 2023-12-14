"""
프로그램을 실제 세상에 가깝게 모델링하는 방법
- 클래스는 설계도다.
- 인스턴스는 설계도로 찍은 생산물이다.
    - 하나의 클래스로 만들어진 여러 인스턴스는 각각 **독립적**이다.

- OOP 원칙
1. 캡슐화
2. 추상화
3. 상속
4. 다형성: 객체를 부품화할 수 있다.
"""


class Cal:
    def __init__(self, a, b):  # 생성자: 메모리에 올라오는 순간, 즉시 실행됨 / 인스턴스를 지칭하는 것
        self.a = a
        self.b = b

    def add(self):
        return self.a + self.b

    def sub(self):
        return self.a - self.b

    def mul(self):
        return self.a * self.b

    def div(self):
        return self.a / self.b


cal1 = Cal(1, 2)
cal2 = Cal(3, 4)

print(cal1.a)
print(cal1.b)
print(cal1.add())

print(cal2.a)
print(cal2.b)

cal1.a = 5

print(cal1.add())
