"""

public vs private
- 외부 접근금지
"""


class Robot:
    """
    Robot Class
    """

    population = 0  # 클래스변수: 인스턴스들이 공유하는 변수

    # 생성자 함수
    def __init__(self, name, age):
        self.name = name  # 인스턴스 변수
        self.__age = age  # 은닉
        Robot.population += 1

    def say_hi(self):  # 인스턴스 메서드
        print(f"Greetings. My masters call me {self.name}")

    def cal_add(self, a, b):
        return a + b

    # 클래스 메서드
    @classmethod
    def how_many(cls):  # self랑 비슷하면서도 다름. 클래스를 받음.
        print(f"We have {cls.population} robots")


class Siri(Robot):
    def __init__(self, name, age):
        super().__init__(name, age)
        # print(self.__age)
        self.__age = 999
        print(self.__age)


ss = Robot("yss", 8)
sss = Siri("iphone", 333)


# print(ss.age)  # AttributeError: 'Robot' object has no attribute 'age'
# 프라이빗은 상속도 불가


"""
property-getter, setter
[property]
- 인스턴스 변수 값을 사용해서 적절한 값으로 보내고 싶을 때
- 인스턴스 변수 값에 대한 유효성 검사 및 수정
"""


class Robot2:
    """
    Robot Class
    """

    __population = 0  # 클래스변수: 인스턴스들이 공유하는 변수

    # 생성자 함수
    def __init__(self, name, age):
        self.__name = name  # 인스턴스 변수
        self.__age = age  # 은닉
        Robot2.__population += 1

    @property
    def name(self):
        return f"yoon {self.__name}"

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, new_age):
        if new_age < 0:
            raise TypeError("invalid range to age")
        else:
            self.__age = new_age

    def __say_hi(self):  # 인스턴스 메서드
        print(f"Greetings. My masters call me {self.__name}")

    def cal_add(self, a, b):
        return a + b

    # 클래스 메서드
    @classmethod
    def how_many(cls):  # self랑 비슷하면서도 다름. 클래스를 받음.
        print(f"We have {cls.__population} robots")


droid = Robot2("rd-d2", 2)
print(droid.age)
droid.age = 7
print(droid.age)
# droid.age = 7
# droid.age = -9999 TypeError: invalid range to age
print(droid.name)
