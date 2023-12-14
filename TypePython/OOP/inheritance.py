"""
[클래스 상속]

1. 부모 클래스가 갖는 모든 메서드와 속성이 자식 클래스에 그대로 상속됨
2. 자식 클래스에서 별도의 메서드나 속성 추가 가능
3. 메서드 오버라이딩
4. super()
5. python의 모든 클래스는 object 클래스를 상속한다: 모든 것은 객체이다.
- MyClass.mro() => 상속관계를 보여줌
"""


class Robot:
    population = 0  # 클래스변수: 인스턴스들이 공유하는 변수

    # 생성자 함수
    def __init__(self, name):
        self.name = name  # 인스턴스 변수
        Robot.population += 1

    def say_hi(self):  # 인스턴스 메서드
        print(f"Greetings. My masters call me {self.name}")

    def cal_add(self, a, b):
        return a + b

    def die(self):
        print(f"{self.name} is being destroyed!")
        Robot.population -= 1
        if Robot.population == 0:
            print(f"{self.name} was the last one.")
        else:
            print(f"There are still {Robot.population} robots working.")

    # 클래스 메서드
    @classmethod
    def how_many(cls):  # self랑 비슷하면서도 다름. 클래스를 받음.
        print(f"We have {cls.population} robots")

    # 스태틱메서드
    @staticmethod
    def this_is_robot_cls():
        print("this is robot class")

    def __str__(self):
        return f"{self.name} Robot"

    def __call__(self):
        print("call!")
        return f"{self.name} call!"


class Siri(Robot):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    # def __init__(self, name, age):
    #     self.name = name
    #     self.age = age
    #     Siri.population += 1

    def call_me(self):
        print("네?")

    def cal_mul(self, a, b):
        return a * b

    def cal_flexable(self, a, b):
        super().say_hi()
        return self.cal_mul(a, b) + self.cal_add(a, b)

    @classmethod
    def hello_apple(cls):
        print(f"{cls} hello apple!")

    def say_hi(self):  # 메서드 오버라이딩
        print(f"Greetings. My masters call me {self.name} by apple.")


siri = Siri("iphone9", 18)

print(siri)
siri.call_me()
print(siri.cal_mul(1, 65))
Siri.hello_apple()
siri.say_hi()
print(siri.age)
siri.cal_flexable(3, 8)

print(
    Siri.mro()
)  # [<class '__main__.Siri'>, <class '__main__.Robot'>, <class 'object'>]
print(Robot.mro())  # [<class '__main__.Robot'>, <class 'object'>]
print(object)
print(dir(object))
print(object.__name__)
print(int.mro())  # [<class 'int'>, <class 'object'>]


class A:
    pass


class B:
    pass


class C:
    pass


# 다중상속
class D(A, B, C):
    pass
