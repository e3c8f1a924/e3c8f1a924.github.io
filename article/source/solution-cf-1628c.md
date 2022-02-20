转化题意：

对于一个 $n\times n$（$n$ 为偶数）的网格图，进行黑白染色，使得任意一个网格，与其相邻的黑格数量是奇数个。

最后答案就是把所有黑格对应的数异或起来。

通过手玩 $n$ 为 $2$，$4$，$6$，$8$ 的情况（有一个技巧：确定了第一行，下面所有行的情况都被确定），可以发现一个规律：当第一行每四个格子中前两个填黑时，可以构造出可行方案。

i.e. 第一行的状态为（`*` 代表黑格）：

```plain
**..**..**..**..**..**.. ...
```

可是我太菜了不会证明。

```cpp
#include<cstdio>
int vis[1003][1003];
int n, t, a[1003][1003], ans;
int main() {
	scanf("%d", &t);
	while (t--) {
		scanf("%d", &n), ans = 0;
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) scanf("%d", a[i] + j);
		}
		for (int i = 1; i <= n + 1; i++) {
			for (int j = 1; j <= n + 1; j++) vis[i][j] = 0;
		}
		for (int i = 1; i <= n; i++) vis[1][i] = (i % 4 == 1 || i % 4 == 2);
		for (int i = 1; i < n; i++) {
			for (int j = 1; j <= n; j++) {
				vis[i + 1][j] = !(vis[i - 1][j] ^ vis[i][j - 1] ^ vis[i][j + 1]);
			}
		}
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				if (vis[i][j]) ans ^= a[i][j];
			}
		}
		printf("%d\n", ans), fflush(stdout);
	}
}
```
