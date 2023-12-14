# Optional Type
from typing import Union, Optional


def foo(name: str) -> Optional[str]:
    if name == "hanui":
        return None
    else:
        return name


xxx: Optional[str] = foo("hanui")  # Union[str, None]
xxx = None
