# Login Integration Guide

This guide shows how to integrate the login functionality with the eCommerce home page.

## Overview

When a user clicks the "Login" button in the header, they should be redirected to the login page. After successful login, they can be redirected back to the home page or any other page.

## Implementation Steps

### 1. Set Up Routing

First, set up routes for your application. Here's an example using React Router:

```tsx
// app.tsx or routes.tsx
import { Routes, Route } from 'react-router-dom';
import { ECommerceHomePage, LoginPage } from '@webbitstudio/e-commerce';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPageContainer />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}
```

### 2. Create a Home Page Container

Create a container component that handles the navigation logic:

```tsx
// HomePage.tsx
import { useNavigate } from 'react-router-dom';
import { ECommerceHomePage, ENGLISH_LOCALE } from '@webbitstudio/e-commerce';

export const HomePage = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);
  const [user, setUser] = useState<User | undefined>();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return <ECommerceHomePage user={user} cartItemCount={cartItemCount} categories={categories} locale={ENGLISH_LOCALE} onLogin={handleLogin} onSignup={handleSignup} onCartClick={handleCartClick} onCategoryClick={handleCategoryClick} />;
};
```

### 3. Create a Login Page Container

Create a container component for the login page that handles authentication:

```tsx
// LoginPageContainer.tsx
import { useNavigate } from 'react-router-dom';
import { LoginPage, ENGLISH_LOGIN_LOCALE } from '@webbitstudio/e-commerce';
import { useAuth } from '../hooks/useAuth'; // Your auth hook

export const LoginPageContainer = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
      // Redirect to home page or the page they came from
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (show toast, etc.)
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return <LoginPage locale={ENGLISH_LOGIN_LOCALE} onLogin={handleLogin} onSignup={handleSignup} onForgotPassword={handleForgotPassword} />;
};
```

### 4. Implement Authentication Service

Create an authentication service to handle login logic:

```tsx
// services/authService.ts
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export const authService = {
  async login(credentials: AuthCredentials): Promise<User> {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    // Store token
    localStorage.setItem('authToken', data.token);

    return data.user;
  },

  async logout(): Promise<void> {
    localStorage.removeItem('authToken');
    // Optional: Call logout endpoint
    await fetch('/api/auth/logout', { method: 'POST' });
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('authToken');
    if (!token) return null;

    try {
      const response = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) return null;

      return await response.json();
    } catch {
      return null;
    }
  },
};
```

### 5. Create an Auth Context/Hook

Manage authentication state across your app:

```tsx
// hooks/useAuth.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/authService';
import type { User } from '@webbitstudio/e-commerce';

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    authService.getCurrentUser().then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  const login = async (email: string, password: string) => {
    const user = await authService.login({ email, password });
    setUser(user);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, isLoading, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### 6. Wire Everything Together

```tsx
// main.tsx or App.tsx
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { Routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
```

## Alternative: Using Next.js

If you're using Next.js, the pattern is similar but uses Next.js routing:

```tsx
// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { ECommerceHomePage } from '@webbitstudio/e-commerce';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <ECommerceHomePage
      onLogin={handleLogin}
      // ... other props
    />
  );
}
```

```tsx
// app/login/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { LoginPage } from '@webbitstudio/e-commerce';

export default function LoginPageRoute() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    // Call your API
    await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    router.push('/');
  };

  return <LoginPage onLogin={handleLogin} onSignup={() => router.push('/signup')} />;
}
```

## Protected Routes

You can protect routes that require authentication:

```tsx
// components/ProtectedRoute.tsx
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
```

Then use it in your routes:

```tsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## Redirect After Login

To redirect users back to the page they were trying to access:

```tsx
// LoginPageContainer.tsx
import { useNavigate, useLocation } from 'react-router-dom';

export const LoginPageContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);

    // Redirect to the page they came from, or home
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  // ...
};
```

And in your protected route:

```tsx
if (!user) {
  return <Navigate to="/login" state={{ from: location }} replace />;
}
```

## Summary

The login flow is now complete:

1. User clicks "Login" button in header → navigates to `/login`
2. User enters credentials → calls authentication API
3. On success → updates auth state and navigates to home or intended page
4. User info appears in header instead of login/signup buttons

All navigation is handled through callback props (`onLogin`, `onSignup`, etc.), keeping the components reusable and framework-agnostic.
