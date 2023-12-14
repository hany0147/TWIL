"""
다형성
- 여러 형태를 가질 수 있다. 객체를 부품화할 수 있다.
- 같은 형태의 코드가 다른 동작을 하도록 하는 것
"""


class Robot:
    """
    Robot Class
    """

    __population = 0  # 클래스변수: 인스턴스들이 공유하는 변수

    # 생성자 함수
    def __init__(self, name, age):
        self.__name = name  # 인스턴스 변수
        self.__age = age  # 은닉
        Robot.__population += 1

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


class Siri(Robot):
    def say_apple(self):
        print("hello my apple")


class SiriKo(Robot):
    def say_apple(self):
        print("안녕하세요")


class Bixby(Robot):
    def say_samsung(self):
        print("안녕하세요 빅스비에요")
