题意简化后就是求

$$
\sum_{1\leq i\leq N}\sum_{i\lt j\leq N}\binom{A_i+B_i+A_j+B_j}{A_i+A_j}
$$

直接暴力搞基本上是没救了。

*~~考虑看题解~~* 考虑 $\binom{A_i+B_i+A_j+B_j}{A_i+A_j}$ 的组合意义：从 $(0,0)$ 每一步只能向右、向上，走到 $(A_i+A_j,B_i+B_j)$ 的方案数。由于 $A_i,B_i\leq 2000$，所以这个部分可以 $\mathcal O(A_i^2)$ 处理。

但是合并答案还是 $\mathcal O(N^2)$ 的。考虑将起点和终点位移 $(-A_i,-B_i)$，就变成了从 $(-A_i,-B_i)$ 每一步只能向右、向上，走到 $(A_j,B_j)$ 的方案数。

设 $f(x,y)$ 表示 $\forall 1\leq i\leq N$，从 $(-A_i,-B_i)$ 到 $(x,y)$ 的方案数的总和。这个部分是可以 $\mathcal O(N+A_i^2)$ 处理的。

然后答案就是 $\sum_{1\leq i\leq n}f(A_i,B_i)$ 稍微处理一下。
