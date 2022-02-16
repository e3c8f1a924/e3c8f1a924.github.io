先枚举删除哪条边，断环为链。

然后就变成了确定运算顺序，使得结果最大的问题。

枚举最后进行操作的运算符，其左边和右边互不影响。

而本题只有 `+` 和 `*` 两种运算，所以满足最优子结构（至于乘法需要分类讨论一下）。

区间 DP 即可。

```cpp
#include<cstdio>
#include<deque>
#include<cstring>
#include<algorithm>
#include<cctype>
#include<vector>
int f[55][55], g[55][55], n, _ = -0x3f3f3f3f;
std::deque<int> num, ope; std::vector<int> ans;
int solve() {
	for (int i = 0; i < n; i++) f[i][i] = g[i][i] = num[i];
	for (int len = 2; len <= n; len++) {
		for (int l = 0; l + len <= n; l++) {
			int r = l + len - 1;
			f[l][r] = -0x3f3f3f3f, g[l][r] = 0x3f3f3f3f;
			for (int k = l; k < r; k++) {
				if (ope[k] == 't') {
					f[l][r] = std::max(f[l][r], f[l][k] + f[k + 1][r]);
					g[l][r] = std::min(g[l][r], g[l][k] + g[k + 1][r]);
				} else {
					f[l][r] = std::max(f[l][r], f[l][k] * f[k + 1][r]);
					f[l][r] = std::max(f[l][r], g[l][k] * g[k + 1][r]);
					f[l][r] = std::max(f[l][r], g[l][k] * f[k + 1][r]);
					f[l][r] = std::max(f[l][r], f[l][k] * g[k + 1][r]);
					g[l][r] = std::min(g[l][r], g[l][k] * g[k + 1][r]);
					g[l][r] = std::min(g[l][r], g[l][k] * f[k + 1][r]);
					g[l][r] = std::min(g[l][r], f[l][k] * g[k + 1][r]);
					g[l][r] = std::min(g[l][r], f[l][k] * f[k + 1][r]);
				}
			}
		}
	}
	return f[0][n - 1];
}
int main() {
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) {
		int x, c = getchar(); 
		while (isspace(c)) c = getchar();
		scanf("%d", &x), num.push_back(x), ope.push_back(c);
	}
	ope.push_back(ope.front()), ope.pop_front();
	for (int i = 1; i <= n; i++) {
		int d = solve();
		if (d > _) ans.clear(), _ = d, ans.push_back(i);
		else if (d == _) ans.push_back(i);
		ope.push_back(ope.front()), num.push_back(num.front());
		ope.pop_front(), num.pop_front();
	}
	printf("%d\n", _);
	for (int x : ans) printf("%d ", x); puts("");
}
```
