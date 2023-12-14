# Type hint
from typing import List, Tuple, Dict, Any

int_var: int = 88
str_var: str = "hello"
float_var: float = 8.8
bool_var: bool = True

list_var: List[int] = [1, 2, 3]
tuple_var: Tuple[int, ...] = (1, 2, 3)
dic_var: Dict[str, int] = {"hello": 456, "wow": 4}


def type_check(obj, typer) -> None:
    if isinstance(obj, typer):
        pass
    else:
        raise TypeError(f"Type Error : {typer}")


def cal_add(x: int, y: int) -> int:
    type_check(x, int)
    type_check(y, int)
    return x + y


print(cal_add(1, 3))
# cal_add("1", "3무")  # 원치 않는 input을 넣는 경우가 발생할 수 있음
# 유닛테스트를 할 때 pyright나 mypy를 사용하는 걸 추천함
