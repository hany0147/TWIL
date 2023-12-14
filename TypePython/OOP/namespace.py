"""
- namespace: 개체를 구분 할 수 있는 범위
- __dict__: 네임스페이스를 확인할 수 있음
- dir(): 네임스페이스의 key 값을 확인할 수 있음
- __doc__: class의 주석 확인
- __class__: 어떤 클래스로 만들어진 인스턴스인지 확인할 수 있음
"""


class Robot:
    population = 0  # 클래스변수: 인스턴스들이 공유하는 변수

    # 생성자 함수
    def __init__(self, name, code):
        self.name = name  # 인스턴스 변수
        self.code = code  # 인스턴스 변수
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
        print

    # 스태틱메서드
    @staticmethod
    def this_is_robot_cls():
        print("this is robot class")


print(Robot.__dict__)

siri = Robot("siri", 210397)
javis = Robot("javis", 23123)
bixby = Robot("bixby", 312113131)
javis2 = Robot("javis", 231232)

print(siri.__dict__)


Robot.say_hi(siri)
siri.say_hi()  # 둘이 같은 논리

print(dir(siri))
siri.this_is_robot_cls()
