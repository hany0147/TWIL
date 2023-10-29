class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Linked_list:
    def __init__(self):
        self.head = None
        self.length = 0

    def __len__(self):
        return self.length
    
    def appendleft(self, data):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            node.next = self.head
            self.head = node
        self.length += 1

    def append(self, data):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            prev = self.head
            while prev.next:
                prev = prev.next
            prev.next = node
        self.length += 1

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

node = head
while node:
    print(node.data, end = " ")
    node = node.next