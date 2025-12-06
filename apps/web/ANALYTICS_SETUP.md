# Umami Analytics Setup (GitHub Pages)

## Quick Start with Umami Cloud

### 1. Sign Up for Umami Cloud (Free)

1. Go to https://cloud.umami.is and create an account
2. Click "Add Website"
3. Enter your domain: `webbitstudio.com`
4. Copy the **Website ID** (looks like: `01234567-89ab-cdef-0123-456789abcdef`)

### 2. Add to GitHub Secrets

1. Go to your GitHub repository: https://github.com/talayellet/webbitstudio
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `VITE_UMAMI_WEBSITE_ID`
5. Value: Paste your Website ID from Umami Cloud
6. Click **Add secret**

### 3. Deploy

Push to `main` branch or trigger the workflow manually:

- Your GitHub Actions workflow is already configured
- Analytics will be active on your next deployment
- No additional setup needed!

### 4. Test Locally (Optional)

Create a `.env.local` file in `apps/web/`:

```env
VITE_UMAMI_WEBSITE_ID=your-website-id-from-umami
```

Then run `yarn dev` and check your browser console.

Use the `useAnalytics` hook in your components:

```tsx
import { useAnalytics } from '../hooks/use-analytics';

const MyComponent = () => {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('button-click', {
      button: 'cta',
      location: 'hero',
    });
  };

  return <button onClick={handleClick}>Click Me</button>;
};
```

## Features You'll Get

✅ **Geolocation**: Country, region, city tracking
✅ **Unique Visitors**: Based on IP + user agent hashing
✅ **Page Views**: Automatic tracking with React Router
✅ **Traffic Sources**: Referrers, UTM parameters
✅ **Device Info**: Browser, OS, device type, screen size
✅ **Real-time Dashboard**: Live visitor tracking
✅ **Events**: Custom event tracking for conversions
✅ **Privacy**: GDPR compliant, no cookies, no personal data

## Alternative: Umami Cloud

If you don't want to self-host, use [Umami Cloud](https://cloud.umami.is):

- Free tier: 100K events/month
- Just set `VITE_UMAMI_WEBSITE_ID` (script URL defaults to cloud)

## Production Deployment

For production, add the environment variable to your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

## Troubleshooting

**Analytics not working?**

1. Check browser console for script loading errors
2. Verify `VITE_UMAMI_WEBSITE_ID` is set correctly
3. Check ad blockers aren't blocking the script
4. Ensure your Umami instance is accessible

**Self-hosting issues?**

- Ensure PostgreSQL database is properly configured
- Check `DATABASE_URL` connection string
- Verify `HASH_SALT` is set
