# 트리순회: 실버1

def preorder(node):
    if node == 46:
        return
    print(chr(node), end="")
    preorder(tree[node][0])
    preorder(tree[node][1])

def midorder(node):
    if node == 46:
        return
    midorder(tree[node][0])
    print(chr(node), end="")
    midorder(tree[node][1])

def postorder(node):
    if node == 46:
        return
    postorder(tree[node][0])
    postorder(tree[node][1])
    print(chr(node), end="")

n = int(input())
tree = [[] for _ in range(92)]
for _ in range(n):
    a, b, c = map(str, input().split())
    a, b, c = ord(a), ord(b), ord(c)
    tree[a].append(b)
    tree[a].append(c)
    
# 65~90 / 46
preorder(65)
print()
midorder(65)
print()
postorder(65)