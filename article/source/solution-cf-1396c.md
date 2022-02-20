首先不难发现对于某一个关卡，存在且只存在 $3$ 种情况：
1. 用手枪击杀所有小怪，并打击一次 boss，回头再杀死 boss；
2. 使用一次激光枪，回头再杀死 boss；
3. 使用手枪击杀所有小怪，再使用 AWP 击杀 boss。

而且，注意到一个关键性质：若某一个关卡没有杀死 boss，则必然是进入另一个关卡后立刻返回击杀 boss，否则答案不优。

所以可以 DP。设 $f(i,1/0)$ 表示处理第 $i$ 个关卡，最终要求 boss 剩余血量为 $1/0$ 时的最短时间。

转移稍微讨论一下即可。

```cpp
#include<cstdio>
#include<algorithm>
int n, r1, r2, r3, d; long long a[1000006];
typedef long long ll; constexpr const ll inf = 0x3f3f3f3f3f3f3f3fll;
ll f[1000006][2];
ll& push(ll& x, ll y) { return x = std::min(x, y); }
int main() {
	scanf("%d%d%d%d%d", &n, &r1, &r2, &r3, &d);
	for (int i = 1; i <= n; i++) scanf("%lld", a + i);
	f[0][0] = -d, f[0][1] = inf;
	for (int i = 1; i <= n; i++) {
		ll kill = std::min((a[i] + 1) * r1, 1ll * r2);
		f[i][0] = f[i][1] = inf;
		push(f[i][0], f[i - 1][0] + kill + 2 * d + r1 + d);
		push(f[i][0], f[i - 1][0] + a[i] * r1 + r3 + d);
		push(f[i][0], f[i - 1][1] + kill + d * 2 + r1 * 2 + d);
		if (i != n) push(f[i][0], f[i - 1][1] + a[i] * r1 + r3 + 2 * d + r1 + d);
		else push(f[i][0], f[i - 1][1] + a[i] * r1 + r3 + 2 * d + r1);
		push(f[i][1], f[i - 1][0] + kill + d);
		push(f[i][1], f[i - 1][1] + kill + d * 2 + r1 + d);
	}
	printf("%lld\n", f[n][0]);
}
```
