# Solving Second Order Linear Hyperbolic PDE (Wave Equation) Initial Value & Boundary Problem - Generalized Solution

# Definition

The second order linear hyperbolic PDE is defined as $x\in (a,b)$

$$
\dfrac{\partial^2 u }{\partial t^2}-\gamma\dfrac{\partial^2u}{\partial x^2}=f
$$

with initial condition

$$
u(x,0)=u_0(x),\quad \dfrac{\partial u}{\partial t}(x,0)=v_0(x)
$$

# Types of Boundary Conditions

## Dirichlet

Let $\circ$ be either $a$ or $b$ , then 

$$
u(\circ,t)=g(t)
$$

is called Dirichlet condition and in the specific case where 

$$
g(t)=0
$$

it is called **homogeneous** (e.g. guitar)

## Neumann

$$
\gamma \partial_xu(\circ, t)=g(t)
$$

## Robin

$$
\gamma \partial_xu(\circ, t)=\sigma(u_\infty (t)-u(\circ,t))
$$

where $\sigma$ and $u_\infty (t)$ will be given

# Solution to homogeneous Dirichlet problem

---

consider 

$$
\dfrac{\partial^2 u }{\partial t^2}-\gamma\dfrac{\partial^2u}{\partial x^2}=f
$$

with initial condition

$$
u(x,0)=u_0(x),\quad \dfrac{\partial u}{\partial t}(x,0)=v_0(x)
$$

and boundary condition

$$
u(0,t)=u(1,t)=0
$$

**physical interpretation: $\gamma^2$ is the stiffness of the string (of the string instrument)**

# Method of Separation of Variables

we assume the solution to the wave equation can be separated into product of time-dependent and space-dependent terms

$$
u(x,t)=X(x)T(t)
$$

plug into the original PDE we have

$$
\dfrac{1}{\gamma^2 T}\dfrac{d^2T}{dt^2}=\dfrac{1}{X}\dfrac{d^2X}{dx^2}=k
$$

where $k$ is arbitrary constant 

the next step is to solve for each side 

**second step**

following to the right $k_j=-j^2\pi^2$

$$
\begin{align*}
\dfrac{1}{\gamma^2 T}\dfrac{d^2T}{dt^2}&=k\\
\dfrac{d^2T}{dt^2}&=\gamma^2 Tk\\
\dfrac{d^2T}{dt^2}&=-\gamma^2 j^2\pi^2T
\end{align*}
$$

this implies 

$$
T(t)=\alpha \sin (\gamma j\pi t)+\beta \cos (\gamma j\pi t)
$$

**first step**

$$
\begin{align*}

\dfrac{1}{X}\dfrac{d^2X}{dx^2}&=k

\end{align*}

$$

in this case 

$$
X(0)=X(1)=0
$$

has no trivial solution if and only if 

$$
k_j=-j^2\pi^2,\quad X_j(x)=\sin(j\pi x)
$$

# Fourier Expansion

The main idea of Fourier Expansion is that any function be expressed as the infinite sum of sine functions, therefore we have initial condition in other forms

$$
u_0(x)\equiv\sum_{j=1}^\infty A_jX_j(x)=\sum_{j=1}^\infty A_j\sin (j\pi x)
$$

$$
v_0(x)\equiv\sum_{j=1}^\infty C_jX_j(x)=\sum_{j=1}^\infty C_j\sin (j\pi x)
$$

where 

$$
A_j=\langle u_0,X_j(x)\rangle=2\int_0^1u_0(x)\sin (j\pi x)\, dx
$$

$$
C_j=\langle v_0,X_j(x)\rangle=2\int_0^1v_0(x)\sin (j\pi x)\, dx
$$

# Generalize - Principle of superposition

By superposition of principle, we have the generalized solution 

$$
u(x,t)=\sum_{j=1}^\infty u_j(x,t)
$$

where 

$$
u_j(x,t)=X_j(x)T_j(t)
$$

# Applying IVP

because 

$$
T_j(t)=\alpha_j \sin (\gamma j\pi t)+\beta_j \cos (\gamma j\pi t)
$$

**we want to get the value of $\alpha_j,\beta_j$ in terms of** $A_j,C_j$

Recall

$$

u(x,0)=u_0(x),\quad \dfrac{\partial u}{\partial t}(x,0)=v_0(x)

$$

this implies 

$$
T_j(0)=\beta _j=u_0(x)
$$

and 

$$
\begin{align*}
\dfrac{dT(t)}{dt}&=\gamma j\pi \alpha_j\cos(\gamma j\pi t)-\gamma j\pi \beta\sin(\gamma j\pi t)\\
\dfrac{dT(0)}{dt}&=\gamma j\pi \alpha_j\cos(\gamma j\pi t)\\
&=v_0(x)
\end{align*}
$$