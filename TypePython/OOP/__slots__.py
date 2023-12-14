"""
- 객체 내에 있는 변수들은 __dict__를 통해서 관리됨
__slots__을 통해 변수를 관리:
    * 파이썬 인터프리터에게 통보. 해당 클래스가 가지는 속성을 제한함
    * __dict__를 통해 관리되는 객체의 성능을 최적화함 -> 다수의 객체 생성시 메모리 사용공간 대폭 감소함.
"""


class WithSlotClass:
    __slots__ = ["name", "age"]

    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age


ws = WithSlotClass("hanui", 31)
# print(ws.__dict__) AttributeError: 'WithSlotClass' object has no attribute '__dict__'. Did you mean: '__dir__'?
print(ws.__slots__)
