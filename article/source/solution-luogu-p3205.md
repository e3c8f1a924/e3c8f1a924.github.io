我们需要做的是通过最终序列反向构造初始序列。

可以使用区间 DP。设 $f(l,r,0/1)$ 表示最终序列中 $[l,r]$ 区间，最后插入的位置是最左/右边的方案数。

不难转移。

```cpp
#include<cstdio>
int const p = 19650827;
int plus(int x, int y) { return x + y >= p ? x + y - p : x + y; }
int n, f[1001][1001][2], h[1001];
int main() {
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) scanf("%d", h + i);
	for (int i = 1; i <= n; i++) f[i][i][0] = f[i][i][1] = 1;
	for (int len = 2; len <= n; len++) {
		for (int l = 1; l + len - 1 <= n; l++) {
			int r = l + len - 1;
			if (h[l] < h[l + 1]) f[l][r][0] = plus(f[l][r][0], f[l + 1][r][0]);
			if (h[l] < h[r] && r != l + 1) f[l][r][0] = plus(f[l][r][0], f[l + 1][r][1]);
			if (h[r] > h[r - 1]) f[l][r][1] = plus(f[l][r][1], f[l][r - 1][1]);
			if (h[r] > h[l] && l != r - 1) f[l][r][1] = plus(f[l][r][1], f[l][r - 1][0]);
		}
	}
	printf("%d\n", plus(f[1][n][0], f[1][n][1]));
}
```
