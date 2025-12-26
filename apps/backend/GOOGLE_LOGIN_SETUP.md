# Google OAuth Login Setup Guide

This guide will help you set up secure Google login for your application - no backend experience required!

## What You'll Need

- A Google account
- About 10 minutes

## Step 1: Get Google OAuth Credentials

### 1.1 Go to Google Cloud Console

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account

### 1.2 Create a New Project (or select existing)

1. Click the project dropdown at the top
2. Click "New Project"
3. Name it something like "My Store Login"
4. Click "Create"

### 1.3 Configure OAuth Consent Screen (REQUIRED FIRST!)

**You must do this before creating credentials:**

1. Go to "APIs & Services" → "Credentials"
2. Click **"Configure consent screen"** button (or the warning message if you see one)
3. Choose **"External"** user type → Click "Continue"
4. Fill in the OAuth consent screen form:
   - **App name**: Your store name (e.g., "Webbit eCommerce")
   - **User support email**: Select your email from the dropdown
   - **App logo**: (Optional - you can skip this)
   - **Developer contact information**: Enter your email
5. Click **"Save and Continue"**
6. On the "Scopes" page → Just click **"Save and Continue"** (no need to add scopes)
7. On "Test users" page → Click **"Save and Continue"** (you can add test users later if needed)
8. Review the summary → Click **"Back to Dashboard"**

### 1.4 Create OAuth Client ID Credentials

Now you can create the actual credentials:

1. Go back to "APIs & Services" → "Credentials"
2. Click **"+ Create Credentials"** at the top → Select **"OAuth client ID"**
3. Configure the OAuth client:
   - **Application type**: Select "Web application"
   - **Name**: "Web Client" (or any name you prefer)
   - **Authorized redirect URIs**: Click "Add URI" and add:
     - For development: `http://localhost:3000/api/auth/callback/google`
     - For production (add later): `https://yourdomain.com/api/auth/callback/google`
4. Click **"Create"**
5. **SAVE THESE CREDENTIALS!**
   - A popup will show your **Client ID** and **Client Secret**
   - Copy both - you'll need them in the next step
   - You can also download them as JSON for safekeeping

## Step 2: Configure Your Application

### 2.1 Generate NextAuth Secret

Open your terminal and run:

```bash
openssl rand -base64 32
```

Copy the output - this is your `NEXTAUTH_SECRET`.

### 2.2 Update Environment Variables

In `/apps/backend/.env`, add these values:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=paste_the_value_from_step_2.1_here
GOOGLE_CLIENT_ID=paste_from_google_console
GOOGLE_CLIENT_SECRET=paste_from_google_console
NEXTAUTH_URL=http://localhost:3000
```

**Important for Production:**

- Change `NEXTAUTH_URL` to your actual domain (e.g., `https://yourstore.com`)
- Never commit your `.env` file to git!

## Step 3: Test Your Login

### 3.1 Start Your Application

From the **workspace root** (not the `apps/backend` folder), run:

```bash
yarn nx dev backend
```

Or from any directory:

```bash
npx nx dev backend
```

### 3.2 Navigate to the Login Example

Open your browser and go to:

```
http://localhost:3000/login-example
```

### 3.3 Click "Continue with Google"

1. You'll be redirected to Google
2. Choose your Google account
3. Grant permissions
4. You'll be redirected back to your app - logged in!

## Step 4: Use in Your App

Here's how to add Google login to any page:

```tsx
'use client';

import { LoginPage } from '@webbitstudio/e-commerce';
import { loginWithGoogle } from '../lib/auth';
import { useRouter } from 'next/navigation';

export default function YourLoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await loginWithGoogle({ callbackUrl: '/' });
  };

  return (
    <LoginPage
      onGoogleLogin={handleGoogleLogin}
      showSocialLogin={true}
      // ... other props
    />
  );
}
```

## How to Check If User Is Logged In

Use NextAuth's `useSession` hook:

```tsx
'use client';

import { useSession } from 'next-auth/react';
import { logout } from '../lib/auth';

export default function MyComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <img src={session.user.image ?? ''} alt="Profile" />
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }

  return <div>Not logged in</div>;
}
```

## Security Features Included

✅ **OAuth 2.0** - Industry standard authentication protocol  
✅ **Secure token handling** - Tokens are never exposed to your frontend  
✅ **Session management** - Automatic session refresh and expiration  
✅ **CSRF protection** - Built into NextAuth  
✅ **No password storage** - Google handles all user credentials

## Production Checklist

Before going live, make sure:

- [ ] `NEXTAUTH_SECRET` is a strong random value (use `openssl rand -base64 32`)
- [ ] `NEXTAUTH_URL` is set to your production domain
- [ ] Google OAuth authorized redirect URIs include your production URL
- [ ] Environment variables are set in your production environment (Vercel, AWS, etc.)
- [ ] `.env` file is in `.gitignore` (never commit secrets!)

## Troubleshooting

### "Error: Redirect URI mismatch"

- Make sure the redirect URI in Google Console exactly matches: `http://localhost:3000/api/auth/callback/google`
- For production, add `https://yourdomain.com/api/auth/callback/google`

### "No session after login"

- Check that `SessionProvider` is wrapping your app in `layout.tsx`
- Make sure `NEXTAUTH_SECRET` is set in your `.env` file

### "Invalid client ID"

- Double-check your `GOOGLE_CLIENT_ID` in `.env`
- Make sure there are no extra spaces or quotes

## Need Help?

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)

## What's Next?

You can also add:

- **Facebook login** - Similar setup with Facebook Developer Console
- **Apple Sign In** - Similar setup with Apple Developer
- **Email/password login** - Use NextAuth's Credentials provider

All using the same secure NextAuth infrastructure!
