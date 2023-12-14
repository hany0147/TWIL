class SelfTest:
    name = "hanui"

    def __init__(self, x):
        self.x = x

    @classmethod
    def func1(cls):
        print(f"cls: {cls}")
        print("func1")

    def func2(self):
        print(f"self: {self}")
        print("클래스안의 self 주소: ", id(self))
        print("func2")


test_obj = SelfTest(17)

test_obj.func2()
SelfTest.func1()

print("인스턴스의 주소: ", id(test_obj))

"""

인스턴스 객체 == self

"""
