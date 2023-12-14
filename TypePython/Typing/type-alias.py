from typing import Union, List, Tuple, Dict, Optional
from typing_extensions import TypedDict

Value = Union[
    int, bool, Union[List[str], List[int], Tuple[int, ...]], Optional[Dict[str, float]]
]  # type alias
value: Value = 17


def cal(v: Value) -> Value:
    return v


# dict alias
ddd: Dict[str, str] = {"hello": "world", "world": "yap"}


class Point(TypedDict):
    x: int
    y: float
    z: str


point: Point = {"x": 8, "y": 9.4, "z": "hi"}
