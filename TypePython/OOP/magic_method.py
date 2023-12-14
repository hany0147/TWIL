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
        print

    # 스태틱메서드
    @staticmethod
    def this_is_robot_cls():
        print("this is robot class")

    def __str__(self):
        return f"{self.name} Robot"

    def __call__(self):
        print("call!")
        return f"{self.name} call!"


droid1 = Robot("R2-D2")
droid1.say_hi()
print(dir(droid1))

"""
__str__ 이런걸 매직 메서드라고 함
"""

print(droid1)  # <__main__.Robot object at 0x000001D4F5179950>
print(droid1.__str__())  # <__main__.Robot object at 0x0000022711DD9950> -> R2-D2 Robot
print(droid1())  # 호출가능한 객체로 만듦
