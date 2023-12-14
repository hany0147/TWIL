"""
추상화: 불필요한 정보는 숨기고 중요한(필요한) 정보만을 표현함으로써
공통의 속성 값이나 행위를 하나로 묶어 이름을 붙이는 것.
"""

# siri_name = "siri"
# siri_code = 3423434


# def siri_say_hi():
#     print("say hello! my name is siri")


# def siri_add_cal():
#     return 2 + 3


# def siri_die():
#     print("siri die")


# javis_name = "javis"
# javis_code = 34231211


# self는 인스턴스를 뜻함
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
        print(f"We have {cls.population} robots")


print(Robot.population)
siri = Robot("siri", 210397)
print(Robot.population)
javis = Robot("javis", 23123)
print(Robot.population)
bixby = Robot("bixby", 312113131)
print(Robot.population)
javis2 = Robot("javis", 231232)
print(Robot.population)

bixby.say_hi()  # 우리는 이 메서드가 어떻게 돌아가는 지 모른다. 그저 결과만 잘 쓸 뿐. 이게 중요한 정보만 드러내고 나머지는 숨기는 추상화를 의미
Robot.how_many()
