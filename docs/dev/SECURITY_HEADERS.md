# Security Headers Configuration

This document explains the security headers implemented for webbitstudio.com.

## Configuration Files

Security headers are defined in **three places** (this duplication is acceptable):

1. **`config/security-headers.config.js`** - Shared constants for Vite and Next.js build configs
2. **`apps/web/public/_headers`** - Cloudflare Pages static file (manually maintained)
3. **`libs/data-access/src/lib/utils/headers.ts`** - CORS constants for runtime application code

### Why the duplication?

- **Build configs** (Vite/Next.js) can import from `config/security-headers.config.js`
- **Cloudflare Pages** requires a static `_headers` file - no imports allowed
- **Runtime code** in libs cannot import from config folder (violates Nx module boundaries)

## Updating Headers

### To update security headers:

1. Edit `config/security-headers.config.js`
2. Manually update `apps/web/public/_headers` to match
3. Restart dev servers

### To update CORS constants:

1. Edit `config/security-headers.config.js` (for build configs)
2. Edit `libs/data-access/src/lib/utils/headers.ts` (for runtime code)

## Platform-Specific Details

### Cloudflare Pages (Production)

Headers configured in `/apps/web/public/_headers`. Cloudflare reads this static file at deployment.

### Vite (Development)

Headers configured in `/apps/web/vite.config.mts`, importing `SECURITY_HEADERS` from config.

### Next.js (Backend)

Headers configured in `/apps/backend/next.config.js`, importing `SECURITY_HEADERS` from config.

## Implemented Headers

### X-Frame-Options: DENY

Prevents the site from being embedded in iframes, protecting against clickjacking attacks.

### X-Content-Type-Options: nosniff

Prevents browsers from MIME-sniffing responses.

### X-XSS-Protection: 1; mode=block

Enables the browser's XSS filter (legacy support).

### Referrer-Policy: strict-origin-when-cross-origin

Controls referrer information sent with requests.

### Permissions-Policy

Disables unnecessary browser features (camera, microphone, geolocation, FLoC).

### Strict-Transport-Security (HSTS)

Forces HTTPS connections (2 year max-age, includeSubDomains, preload eligible).

### Content-Security-Policy (CSP)

See `apps/web/public/_headers` for the full policy. Prevents XSS and data injection attacks.

## Testing Headers

Test your headers after deployment:

1. [SecurityHeaders.com](https://securityheaders.com/?q=webbitstudio.com)
2. [Mozilla Observatory](https://observatory.mozilla.org/analyze/webbitstudio.com)
3. Browser DevTools → Network tab
