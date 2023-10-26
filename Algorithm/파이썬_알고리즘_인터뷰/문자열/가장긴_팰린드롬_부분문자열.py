s = 'babad'
b = 'cbbd'
def logest(s):
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1 : right]
    
    if len(s) < 2 or s == s[::-1]:
        return s
    result = ''
    for i in range(len(s) - 1):
        result = max(result,
                    expand(i, i + 2),
                    expand(i, i + 2),
                    key=len)
    return result


print(logest(s))
print(logest(b))