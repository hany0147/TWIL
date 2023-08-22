# LCS: 골드5

a_lst = list(str(input()))
b_lst = list(str(input()))
dp = [[0 for _ in range(len(b_lst) + 1)] for _ in range(len(a_lst) + 1)]

for i in range(1, len(a_lst) + 1):
    for j in range(1, len(b_lst) + 1):
        if a_lst[i - 1] == b_lst[j - 1]:
            dp[i][j] = dp[i - 1][j - 1] + 1
        else:
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

print(dp[len(a_lst)][len(b_lst)])