# Security Headers Configuration

This document explains the security headers implemented for webbitstudio.com.

## Production (Cloudflare Pages)

Security headers are configured in `/apps/web/public/_headers`. Cloudflare Pages automatically reads this file and applies the headers to all responses.

## Development & Preview (Vite)

Security headers are configured in `/apps/web/vite.config.mts` for the dev server and preview mode.

## Backend (Next.js)

Security headers are configured in `/apps/backend/next.config.js`.

## Implemented Headers

### X-Frame-Options: DENY

Prevents the site from being embedded in iframes, protecting against clickjacking attacks.

### X-Content-Type-Options: nosniff

Prevents browsers from MIME-sniffing responses, reducing exposure to drive-by download attacks.

### X-XSS-Protection: 1; mode=block

Enables the browser's XSS filter (legacy support for older browsers).

### Referrer-Policy: strict-origin-when-cross-origin

Controls how much referrer information is sent with requests:

- Same origin: full URL
- Cross-origin HTTPS→HTTPS: origin only
- Cross-origin HTTPS→HTTP: no referrer

### Permissions-Policy

Disables unnecessary browser features:

- `camera=()` - Blocks camera access
- `microphone=()` - Blocks microphone access
- `geolocation=()` - Blocks geolocation (note: your app uses ipapi.co for country detection, which is server-side)
- `interest-cohort=()` - Blocks FLoC tracking

### Strict-Transport-Security (HSTS)

Forces HTTPS connections:

- `max-age=63072000` - 2 years
- `includeSubDomains` - Applies to all subdomains
- `preload` - Eligible for browser preload lists

### Content-Security-Policy (CSP)

Comprehensive policy to prevent XSS and data injection attacks:

**Allowed sources:**

- `default-src 'self'` - Only load resources from same origin by default
- `script-src` - Scripts from self, inline scripts (needed for React), and trusted domains:
  - web3forms.com (contact form)
  - ipapi.co (geolocation)
  - sentry.io (error tracking)
- `style-src 'self' 'unsafe-inline'` - Styles from self and inline (Tailwind CSS)
- `img-src 'self' data: https:` - Images from self, data URIs, and any HTTPS source
- `font-src 'self' data:` - Fonts from self and data URIs
- `connect-src` - API calls to trusted domains
- `frame-src https://web3forms.com` - Only allow iframes from Web3Forms
- `object-src 'none'` - Block plugins
- `base-uri 'self'` - Prevent base tag injection
- `form-action 'self' https://web3forms.com` - Forms can only submit to self or Web3Forms
- `upgrade-insecure-requests` - Automatically upgrade HTTP to HTTPS

## Testing Headers

After deployment, test your headers using:

1. [SecurityHeaders.com](https://securityheaders.com/?q=webbitstudio.com)
2. [Mozilla Observatory](https://observatory.mozilla.org/analyze/webbitstudio.com)
3. Browser DevTools → Network tab → Response Headers

## Deployment Notes

### Cloudflare Pages

The `_headers` file is automatically deployed with your site. Changes take effect immediately after deployment.

### Updating CSP

If you add new third-party services, update the `Content-Security-Policy` in `/apps/web/public/_headers`:

1. Add the domain to the appropriate directive (script-src, connect-src, etc.)
2. Test locally first
3. Deploy and verify with browser console (CSP violations are logged)

## HSTS Preload

To submit your domain to the HSTS preload list:

1. Ensure HSTS header is active for at least 30 days
2. Visit [hstspreload.org](https://hstspreload.org/)
3. Submit webbitstudio.com
4. Wait for approval (can take months)

⚠️ **Warning**: HSTS preload is permanent and cannot be easily undone. Only enable if you're certain you'll always use HTTPS.
