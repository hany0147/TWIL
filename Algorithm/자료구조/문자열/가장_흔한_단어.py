import re
from collections import defaultdict, Counter


paragraph = "Bob hit a ball, the hit BALL flew far after it was  hit."
banned = ["hit"]

words = [word for word in re.sub(r'[^\w]', ' ', paragraph).lower().split() if word not in banned]
counts = Counter(words)
print(counts.most_common(1)[0][0])

# counts = defaultdict(int)
# for word in words:
#     counts[word] += 1

# print(max(counts, key=counts.get))