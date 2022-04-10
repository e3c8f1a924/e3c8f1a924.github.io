考虑题目要求的实质是对于每一个前缀判断是否存在一个周期使得：

1. 是该前缀的一个整周期且出现了 $k$ 次或 $k+1$ 次或 $2k+1$ 次；
2. 不是该前缀的一个整周期但完整出现了 $k$ 次。

设前缀的长度为 $i$，且最小周期为 $d$。根据结论每个周期长度都是 $d$ 的倍数。

对于情况 1，判断 $d$ 是否是 $i$ 的因数（否则不存在整周期），并判断 $\frac{i}{k}$，$\frac{i}{k+1}$ 和 $\frac{i}{2k+1}$（整除的情况下）是否是 $d$ 的倍数（是否是合法周期）。

对于情况 2，也就是说求是否存在一个整数 $x$ 使得：

$$
\left\lfloor\frac{i}{xd}\right\rfloor=k
$$

稍微转化一下有

$$
\left\lfloor\frac{i}{d(k+1)}\right\rfloor\lt x\leqslant\left\lfloor\frac{i}{dk}\right\rfloor
$$

直接判断即可。
