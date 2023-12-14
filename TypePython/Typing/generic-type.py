"""
데이터 형식에 의존하지 않고, 하나의 값이 여러 다른 데이터 타입들을 가질 수 있는 기술
"""
from typing import Union, Optional, TypeVar, Generic

ARM = TypeVar("ARM", int, float, str)
HEAD = TypeVar("HEAD", int, float, str)


class Robot(Generic[ARM, HEAD]):
    def __init__(self, arm: ARM, head: HEAD):
        self.arm = arm
        self.head = head

    def decode(self):
        pass


robot1 = Robot[int, int](12345, 353535)
robot2 = Robot[str, int]("3535", 14224242)
robot3 = Robot[float, str](34.3, "222222")


class Siri(Generic[ARM, HEAD], Robot[ARM, HEAD]):
    pass


siri2 = Siri[str, int]("3535", 14224242)
siri3 = Siri[float, str](34.3, "222222")
siri1 = Siri[int, int](12345, 353535)


# function
def test(x: ARM) -> ARM:
    print(x)
    print(type(x))
    return x


test(888)
