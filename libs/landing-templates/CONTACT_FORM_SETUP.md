# Contact Form Setup Guide

The contact form component supports multiple configuration options to fit your needs.

## Quick Start (Recommended for Most Users)

### Option 1: Web3Forms (Free, No Backend Required) ⭐

**Best for:** Most users who want a simple, free solution without managing a backend.

1. **Get your free access key**:

   - Visit https://web3forms.com
   - Enter your email address
   - You'll receive an access key instantly (no signup required)

2. **Use it in your component**:

```tsx
import { ContactForm } from '@webbitstudio/landing-templates';

<ContactForm formTitle="Get in Touch" localeStrings={localeStrings} web3formsAccessKey="YOUR_ACCESS_KEY_HERE" />;
```

**That's it!** Form submissions will be sent to the email you registered with Web3Forms.

#### Features:

- ✅ Free forever, unlimited submissions
- ✅ No backend required
- ✅ Email notifications
- ✅ Spam protection included
- ✅ File uploads support
- ✅ Custom redirects
- ✅ Works with static sites

---

## Advanced Options

### Option 2: Custom Backend (Full Control)

**Best for:** Users who need full control, custom logic, or want to store submissions in a database.

See the [Backend Setup Guide](../../../apps/backend/CONTACT_FORM_SETUP.md) for detailed instructions on setting up the included Next.js backend with Resend email service.

```tsx
<ContactForm
  formTitle="Get in Touch"
  localeStrings={localeStrings}
  apiEndpoint="/api/contact" // Your custom backend endpoint
/>
```

#### Features:

- ✅ Full control over email templates
- ✅ Rate limiting (prevent spam/DDoS)
- ✅ Database storage
- ✅ Custom validation
- ✅ Integration with your systems

**Requirements:**

- Next.js backend (included in this template)
- Resend account (or other email service)
- Server/hosting for the backend

---

### Option 3: Custom Handler

**Best for:** Developers who want complete control over submission handling.

```tsx
<ContactForm
  formTitle="Get in Touch"
  localeStrings={localeStrings}
  onSubmit={(data) => {
    // Your custom logic here
    console.log('Form submitted:', data);
    // Call your own API, save to state, etc.
  }}
/>
```

---

## Component Props

```typescript
interface ContactFormProps {
  formTitle: string; // Title displayed above the form
  localeStrings: LocaleStrings; // Localization strings
  onSubmit?: (data: ContactFormData) => void; // Custom submission handler
  web3formsAccessKey?: string; // Web3Forms access key (recommended)
  apiEndpoint?: string; // Custom API endpoint (fallback)
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

---

## Examples

### Basic Usage (Web3Forms)

```tsx
import { ContactForm } from '@webbitstudio/landing-templates';
import { enUS } from '@webbitstudio/landing-templates';

function ContactPage() {
  return <ContactForm formTitle="Contact Us" localeStrings={enUS} web3formsAccessKey="your-access-key-here" />;
}
```

### With Custom Backend

```tsx
<ContactForm formTitle="Get in Touch" localeStrings={localeStrings} apiEndpoint="https://your-api.com/contact" />
```

### With Custom Handler

```tsx
<ContactForm
  formTitle="Contact Form"
  localeStrings={localeStrings}
  onSubmit={async (data) => {
    try {
      await fetch('/my-custom-endpoint', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      alert('Message sent!');
    } catch (error) {
      alert('Failed to send');
    }
  }}
/>
```

---

## Comparison

| Feature          | Web3Forms   | Custom Backend  | Custom Handler  |
| ---------------- | ----------- | --------------- | --------------- |
| Setup Time       | 2 minutes   | 30+ minutes     | Varies          |
| Cost             | Free        | Varies          | Varies          |
| Backend Required | ❌ No       | ✅ Yes          | Your choice     |
| Email Service    | ✅ Included | Setup required  | Your choice     |
| Spam Protection  | ✅ Included | You implement   | Your choice     |
| Rate Limiting    | ✅ Included | You implement   | Your choice     |
| Database Storage | ❌ No       | ✅ Yes          | Your choice     |
| Customization    | Limited     | ✅ Full control | ✅ Full control |

---

## Web3Forms Advanced Features

### Custom Email Subject

Add a hidden field to customize the email subject:

```tsx
// In your form component, add a hidden input:
<input type="hidden" name="subject" value="New Contact from Website" />
```

### Send to Multiple Emails

```tsx
<input type="hidden" name="cc" value="team@example.com,sales@example.com" />
```

### Custom Redirect After Submission

```tsx
<input type="hidden" name="redirect" value="https://yoursite.com/thank-you" />
```

### Add More Fields

Web3Forms automatically captures all form fields. Just add them to your form:

```tsx
<input type="text" name="phone" placeholder="Phone Number" />
<input type="text" name="company" placeholder="Company Name" />
```

---

## Troubleshooting

### Web3Forms

**Not receiving emails?**

1. Check your spam folder
2. Verify your access key is correct
3. Check Web3Forms dashboard for delivery status
4. Make sure you verified your email with Web3Forms

**Form not submitting?**

1. Check browser console for errors
2. Verify all required fields are filled
3. Check network tab for failed requests

### Custom Backend

See [Backend Setup Guide](../../../apps/backend/CONTACT_FORM_SETUP.md) for backend-specific troubleshooting.

---

## Security

### Web3Forms

- Built-in spam protection (honeypot, captcha)
- Rate limiting included
- GDPR compliant

### Custom Backend

- Implement rate limiting (included in template)
- Add CAPTCHA if needed (reCAPTCHA, hCaptcha)
- Validate and sanitize all inputs (included in template)
- Use HTTPS only

---

## Production Checklist

- [ ] Choose your solution (Web3Forms recommended)
- [ ] Get access key / configure backend
- [ ] Test form submission
- [ ] Verify email delivery
- [ ] Check spam folder settings
- [ ] Test error handling
- [ ] Set up monitoring (optional)
- [ ] Configure custom email templates (backend only)

---

## Support

- **Web3Forms Documentation**: https://docs.web3forms.com
- **Web3Forms Support**: https://web3forms.com/contact
- **Template Issues**: [Create an issue in your template repository]

---

## License

This component is part of the webbitstudio landing template package.
