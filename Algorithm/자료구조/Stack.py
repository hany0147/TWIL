'''
가장 나중에 넣은 데이터를 가장 먼저 빼낼 수 있는 데이터 구조
LIFO
'''
class Stack:
    def __init__(self): # 스택 객체 생성
        self.items = []

    def push(self, item): # 스택 요소 추가
        self.items.append(item)
    
    def pop(self): # 스택 맨 뒤 요소 삭제하고 리턴 pop()
        return self.items.pop()
    
    def peek(self): # 스택 맨 뒤 요소 리턴
        return self.items[-1]
    
    def isEmpty(self): # 스택이 비었는 지 확인(비었으면 True 리턴)
        return not self.items
    

stack = Stack()
print(stack)
print(stack.isEmpty())

stack.push(7)
stack.push(4)
stack.push(3)
print(stack.items)

print(stack.peek())
print(stack.pop())
print(stack.items)
print(stack.pop())
print(stack.pop())
print(stack.isEmpty())
print(stack.items)