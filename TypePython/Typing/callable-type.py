# callable types
from typing import Callable


def add(a: int, b: int) -> int:
    return a + b


print(add(1, 5))


def add2(a: int, b: int):
    print(a + b)


def foo(func: Callable[[int, int], int]) -> int:
    return func(2, 4)


print(foo(add))
