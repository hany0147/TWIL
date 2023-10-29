from collections import defaultdict


strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

words = defaultdict(list)

for word in strs:
    words[''.join(sorted(word))].append(word)

print(list(words.values()))