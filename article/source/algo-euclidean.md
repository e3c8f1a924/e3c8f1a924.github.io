## Part 1

求

$$
\begin{aligned}
f(a,b,c,n)=\sum_{i=0}^n\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor
\end{aligned}
$$

1. $a\geq c\lor b\geq c$

$$
\begin{aligned}
f(a,b,c,n)=&\sum_{i=0}^n\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor\\
=&\sum_{i=0}^n\left\lfloor\frac{(a\bmod c)\cdot i+b\bmod c+(a-a\bmod c)i+(b-b\bmod c)}{c}\right\rfloor\\
=&\sum_{i=0}^n\left\lfloor\frac{(a\bmod c)\cdot i+b\bmod c}{c}\right\rfloor+\left\lfloor\frac{a}{c}\right\rfloor\cdot i+\left\lfloor\frac{b}{c}\right\rfloor\\
=&(n+1)\cdot\left\lfloor\frac{b}{c}\right\rfloor+\frac{n(n+1)}{2}\left\lfloor\frac{a}{c}\right\rfloor+\sum_{i=0}^n\left\lfloor\frac{(a\bmod c)\cdot i+b\bmod c}{c}\right\rfloor\\
=&(n+1)\cdot\left\lfloor\frac{b}{c}\right\rfloor+\frac{n(n+1)}{2}\left\lfloor\frac{a}{c}\right\rfloor+f(a\bmod c,b\bmod c,c,n)
\end{aligned}
$$
问题转化为情况 2。

2. $a\lt c\land b\lt c$

设 $m=\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor$。

若 $m=0$ 则 $f(a,b,c,n)=0$，否则

$$
\begin{aligned}
f(a,b,c,n)=&\sum_{i=0}^n\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\left[j+1\leq\frac{a\cdot i+b}{c}\right]\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\left[c\cdot j+c\leq a\cdot i+b\right]\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\left[\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\lt i\right]\\
=&\sum_{j=0}^{m-1}\sum_{i=1}^n\left[\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\lt i\right]\\
=&\sum_{j=0}^{m-1}\left(n-\sum_{i=1}^n\left[i\leq\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right]\right)\\
=&n\cdot m-\sum_{j=0}^{m-1}\sum_{i=1}^n\left[i\leq\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right]\\
=&n\cdot m-\sum_{j=0}^{m-1}\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\\
=&n\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-f\left(c,c-b-1,a,\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-1\right)
\end{aligned}
$$

> 注：上式中 $\sum_{i=1}^n\left[i\leq\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right]$ 到 $\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor$ 的转化需要条件 $\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\leq n$。证明如下：
> $$
\begin{aligned}
j\leq&\frac{a\cdot n + b}{c}-1\\
\Rightarrow c\cdot j+c-b-1\leq&a\cdot n-1\\
\Rightarrow \frac{c\cdot j+c-b-1}{a}\leq&\frac{a\cdot n-1}{a}\\
\Rightarrow \left\lfloor\frac{c\cdot j+c-b-1}{a}\right\rfloor\leq&n-1\lt n
\end{aligned}
$$

## Part 2

求

$$
\begin{aligned}
g(a,b,c,n)=\sum_{i=0}^n\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor^2
\end{aligned}
$$
$$
\begin{aligned}
h(a,b,c,n)=\sum_{i=0}^ni\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor
\end{aligned}
$$

1. $a\geq c\lor b\geq c$

$$
\begin{aligned}
g(a,b,c,n)=&\sum_{i=0}^n\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor^2\\
=&\sum_{i=0}^n\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)+(a-a\bmod c)\cdot i+(b-b\bmod c)}{c}\right\rfloor^2\\
=&\sum_{i=0}^n\left(\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)}{c}\right\rfloor+i\cdot\left\lfloor\frac ac\right\rfloor+\left\lfloor\frac bc\right\rfloor\right)^2\\
=&\sum_{i=0}^n\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)}{c}\right\rfloor^2+i^2\cdot\left\lfloor\frac ac\right\rfloor^2+\left\lfloor\frac bc\right\rfloor^2+2i\cdot\left\lfloor\frac ac\right\rfloor\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)}{c}\right\rfloor+2\left\lfloor\frac bc\right\rfloor\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)}{c}\right\rfloor+2i\left\lfloor\frac ac\right\rfloor\left\lfloor\frac bc\right\rfloor\\
=&(n+1)\left\lfloor\frac bc\right\rfloor^2+n(n+1)\left\lfloor\frac ac\right\rfloor\left\lfloor\frac bc\right\rfloor+\frac{n(n+1)(2n+1)}6\cdot\left\lfloor\frac ac\right\rfloor^2+2\left\lfloor\frac bc\right\rfloor f(a\bmod c,b\bmod c, c,n)+g(a\bmod c,b\bmod c,c,n)+2\left\lfloor\frac ac\right\rfloor h(a\bmod c,b\bmod c,c,n)\\
\end{aligned}
$$
$$
\begin{aligned}
h(a,b,c,n)=&\sum_{i=0}^ni\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor\\
=&\sum_{i=0}^ni\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)+(a-a\bmod c)\cdot i+(b-b\bmod c)}{c}\right\rfloor\\
=&\sum_{i=0}^ni\left\lfloor\frac{(a\bmod c)\cdot i+(b\bmod c)}{c}\right\rfloor+\left\lfloor\frac ac\right\rfloor i^2+\left\lfloor\frac bc\right\rfloor i\\
=&\frac{n(n+1)}{2}\left\lfloor\frac bc\right\rfloor+\frac{n(n+1)(2n+1)}6\left\lfloor\frac ac\right\rfloor+h(a\bmod c,b\bmod c,c,n)
\end{aligned}
$$
问题转化为情况 2。

2. $a\lt c\land b\lt c$

设 $m=\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor$。

若 $m=0$ 则 $g(a,b,c,n)=0$，$h(a,b,c,n)=0$，否则
$$
\begin{aligned}
g(a,b,c,n)=&\sum_{i=0}^n\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor^2\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\left[j+1\leq \left\lfloor\frac{a\cdot i+b}{c}\right\rfloor\right](2j+1)\\
=&\sum_{i=0}^n\sum_{j=0}^{m-1}\left[\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\lt i\right](2j+1)\\
=&\sum_{j=0}^{m-1}(2j+1)\sum_{i=1}^n\left[\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\lt i\right]\\
=&\sum_{j=0}^{m-1}(2j+1)\left(n-\sum_{i=1}^n\left[i\leq\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right]\right)\\
=&\sum_{j=0}^{m-1}(2j+1)\left(n-\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right)\\
=&n\left(\sum_{j=0}^{m-1}2j+1\right)-2\left(\sum_{j=0}^{m-1}j\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right)-\sum_{j=0}^{m-1}\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\\
=&n\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor^2-f\left(c,c-b-1,a,\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-1\right)-2h\left(c,c-b-1,a,\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-1\right)
\end{aligned}
$$
$$
\begin{aligned}
h(a,b,c,n)=&\sum_{i=0}^ni\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor\\
=&\sum_{i=0}^ni\sum_{j=0}^{m-1}\left[j+1\leq\left\lfloor\frac{a\cdot i+b}{c}\right\rfloor\right]\\
=&\sum_{j=0}^{m-1}\sum_{i=1}^ni\left[\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\lt i\right]\\
=&\sum_{j=0}^{m-1}\left(\frac{n(n+1)}{2}-\sum_{i=1}^ni\left[i\leq \left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor\right]\right)\\
=&\frac{n(n+1)}{2}m-\sum_{j=0}^{m-1}\frac{\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor^2+\left\lfloor\frac{c\cdot j+c-b-1}a\right\rfloor}{2}\\
=&\frac{n(n+1)}{2}\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-\frac 12f\left(c,c-b-1,a,\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-1\right)-\frac 12g\left(c,c-b-1,a,\left\lfloor\frac{a\cdot n+b}{c}\right\rfloor-1\right)
\end{aligned}
$$

## 复杂度

递归求解时 $a$ 与 $c$ 的变换和求解 $\gcd$ 时类似，而边界条件也是类似的（也许就因为这个才叫类欧吧）。

所以用类欧几里德算法求解上面的式子和求解 $\gcd$ 的时间复杂度是相同的。

## 参考资料

1. @CE\_WA\_TLE 大佬的课件（校内资料）~~式子都是对着课件推的~~
