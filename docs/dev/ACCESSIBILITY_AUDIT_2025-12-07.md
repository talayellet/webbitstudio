# Accessibility Audit Report - Webbit Studio

**Date:** December 7, 2025  
**Standard:** WCAG 2.1 Level AA  
**Auditor:** Automated + Manual Review  
**Status:** ⚠️ Partial Compliance

---

## Executive Summary

This audit was conducted to ensure UK/EU legal compliance with:

- UK Equality Act 2010
- EU Web Accessibility Directive 2016/2102
- WCAG 2.1 Level AA

**Key Findings:**

- ✅ Many accessibility best practices implemented
- ❌ 2 Critical issues requiring immediate attention
- ⚠️ 5 High-priority issues
- 📋 8 Medium-priority issues

---

## Critical Issues (Immediate Action Required)

### 1. Animations Do Not Respect `prefers-reduced-motion` (WCAG 2.3.3)

**Severity:** CRITICAL  
**WCAG:** 2.3.3 Animation from Interactions  
**Impact:** Users with vestibular disorders may experience discomfort or nausea

**Affected Files:**

- All components with transitions/animations
- Mobile menu slide-in animations
- Toast notifications fade effects
- Modal overlays
- Chevron icon rotations

**Fix Required:**

```css
/* Add to global styles */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Workaround Currently Documented:** Contact us for static version

---

### 2. Form Error Messages Not Programmatically Associated (WCAG 3.3.1)

**Severity:** CRITICAL  
**WCAG:** 3.3.1 Error Identification, 3.3.3 Error Suggestion (Level AA)  
**Impact:** Screen reader users not notified of errors

**Location:** `libs/pages/src/lib/components/home/components/contact-section.tsx`

**Current Implementation (Incorrect):**

```tsx
<input aria-invalid={errors.name ? 'true' : 'false'} />;
{
  errors.name && <p>{content.form.errors.nameRequired}</p>;
}
```

**Required Fix:**

```tsx
<input aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'name-error' : undefined} />;
{
  errors.name && (
    <p id="name-error" role="alert">
      {content.form.errors.nameRequired}
    </p>
  );
}
```

**Affected Fields:**

- Name field (lines 115-127)
- Email field (lines 137-154)
- Country field
- Phone field
- Budget field
- Consent checkbox (lines 219-223)

**Workaround Currently Documented:** Error messages appear below fields

---

## High-Priority Issues

### 3. SVG Icons Missing Accessible Labels (WCAG 1.1.1)

**Files:**

- `libs/ui-components/src/lib/svg-icons/envelope-icon.tsx`
- `libs/ui-components/src/lib/svg-icons/phone-icon.tsx`
- `libs/ui-components/src/lib/svg-icons/close-icon.tsx`
- `libs/ui-components/src/lib/svg-icons/default-chevron-icon.tsx`
- `libs/ui-components/src/lib/svg-icons/check-circle-icon.tsx`

**Good Examples (Already Correct):**

- ✅ `check-icon.tsx` - has `aria-hidden="true"`
- ✅ `chevron-down-icon.tsx` - has `aria-hidden="true"`

**Fix:** Add `aria-hidden="true"` to all decorative SVGs or provide proper `role` and `aria-label` for functional icons

**Workaround Currently Documented:** May cause minor confusion but doesn't block functionality

---

### 4. Modal Dialog Focus Not Trapped (WCAG 2.4.3)

**File:** `libs/pages/src/lib/components/home/components/header/components/mobile-menu.tsx`  
**Issue:** Users can tab to content behind the modal

**Required:**

- Trap focus within modal when open
- Move focus to first focusable element on open
- Return focus to trigger element on close
- Prevent tabbing to background content

**Recommended Library:** `focus-trap-react` or implement manual focus management

**Workaround Currently Documented:** Use ESC key or close button

---

### 5. CustomSelect Component ARIA Issues (WCAG 4.1.2)

**File:** `libs/ui-components/src/lib/custom-select/custom-select.tsx`

**Issues:**

- Missing `aria-activedescendant` on button when menu open
- Listbox options need better keyboard focus indication
- Button should explicitly have `role="combobox"`

**Impact:** Screen readers may not properly announce current selection or navigation

---

### 6. HTML Element Missing `lang` Attribute (WCAG 3.1.1)

**Location:** Likely in Next.js layout/root component  
**Required:** Verify `<html lang="en">` (or appropriate locale) is set

**Impact:** Screen readers won't know what language to use for pronunciation

---

### 7. Color Contrast Issues (WCAG 1.4.3)

**Potential Issues:**

- `text-slate-300` (#cbd5e1) on `bg-slate-950` (#020617) - needs verification
- `text-slate-400` (#94a3b8) on `bg-slate-950` - likely fails 4.5:1 requirement
- Placeholder text contrast

**Action:** Manual contrast testing required using tools like:

- WebAIM Contrast Checker
- Chrome DevTools contrast ratio feature

**Workaround Currently Documented:** Design system being updated

---

## Medium-Priority Issues

### 8. Menu Components Using Incorrect Roles

**Files:**

- `libs/ui-components/src/lib/language-switcher/language-switcher.tsx`
- `libs/ui-components/src/lib/currency-switcher/currency-switcher.tsx`

**Issue:** Dropdowns use generic `<div>` containers instead of proper `role="menu"` and `role="menuitem"`

**Recommendation:** Use proper menu semantics or consider using a combobox pattern

---

### 9. Cookie Preferences Panel Focus Management

**File:** Cookie consent banner preferences panel

**Issue:** Uses `tabIndex={-1}` and tries to focus the panel itself, should focus first interactive element

**Better Approach:**

```tsx
const firstToggleRef = useRef<HTMLButtonElement>(null);
useEffect(() => {
  if (showPreferences) {
    firstToggleRef.current?.focus();
  }
}, [showPreferences]);
```

---

### 10. Mobile Menu Overlay Not Keyboard Accessible

**File:** Mobile menu overlay div

**Issue:** Clickable overlay lacks proper button semantics

**Fix:** Use `<button>` element or add `role="button"`, `tabIndex={0}`, and keyboard handlers

---

### 11. Form Submission Loading State Not Announced (WCAG 4.1.3)

**File:** Contact form

**Issue:** Button text changes to "Submitting..." but no `aria-live` region announces this

**Fix:**

```tsx
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {isSubmitting && content.form.submitting}
</div>
```

---

## Low-Priority Issues

### 12. FAQ Accordion - Redundant ARIA

**Issue:** Manual `aria-expanded` on native `<details>` is redundant

**Note:** Not harmful, but unnecessary code

---

### 13. Skip Navigation Limited

**Current:** Only "skip to main content"  
**Enhancement:** Consider adding "skip to navigation" as well

**Note:** Current implementation passes WCAG AA, this is a AAA enhancement

---

### 14. Heading Hierarchy - Verification Needed

**Action:** Verify no sections skip from H2 to H4

**Initial Review:** Appears correct, all use proper H2 → H3 structure

---

## Accessibility Statement Updates

✅ **COMPLETED** - All language versions updated with:

1. **Specific Non-Conformances Listed:**

   - Prefers-reduced-motion not supported
   - Form error association issues
   - SVG icon announcements
   - Modal focus management
   - Color contrast concerns

2. **Honest Disclosure:**

   - Clear statement: "As a small team with limited resources, we cannot provide specific remediation dates"
   - Commitment to continuous improvement
   - User feedback encouraged

3. **Workarounds Provided:**

   - Static site version available (for animations)
   - Error messages visible below fields
   - ESC key to close modals
   - Contact email for assistance

4. **Languages Updated:**
   - ✅ English (`en.ts`)
   - ✅ Spanish (`es.ts`)
   - ✅ French (`fr.ts`)
   - ✅ German (`de.ts`)
   - ✅ Hebrew (`he.ts`)

---

## Legal Compliance Status

### UK Equality Act 2010

**Status:** ⚠️ Partial Compliance

**Required Actions:**

1. ✅ Accessibility statement published with specific issues
2. ⚠️ Fix critical issues (prefers-reduced-motion, form errors)
3. ✅ Provide alternative contact methods

### EU Web Accessibility Directive 2016/2102

**Status:** ⚠️ Partial Compliance

**Required:**

1. ✅ Statement published in accessible format
2. ✅ Known non-conformances listed with reasons
3. ✅ Feedback mechanism provided
4. ⚠️ Address critical WCAG 2.1 AA failures

---

## Implementation Priority

### Phase 1: Legal Compliance (Immediate - Before Launch)

1. Add `prefers-reduced-motion` CSS
2. Fix form error associations
3. Add SVG `aria-hidden` attributes
4. Verify HTML lang attribute
5. Test and fix color contrast issues

**Estimated Effort:** 1-2 days

### Phase 2: High Priority (Within 2 Weeks)

1. Implement modal focus trap
2. Fix CustomSelect ARIA
3. Update menu component semantics

**Estimated Effort:** 2-3 days

### Phase 3: Medium Priority (Within 1 Month)

1. Cookie panel focus improvements
2. Form submission announcements
3. Mobile overlay button fix

**Estimated Effort:** 1 day

### Phase 4: Enhancements (Ongoing)

1. Additional skip links
2. Heading hierarchy validation
3. Enhanced keyboard shortcuts
4. AAA compliance improvements

---

## Testing Recommendations

### Automated Testing

- [ ] Axe DevTools browser extension
- [ ] WAVE evaluation tool
- [ ] Lighthouse accessibility audit
- [ ] pa11y CI integration

### Manual Testing Required

- [ ] Keyboard navigation (Tab, Shift+Tab, Enter, Space, ESC)
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Color contrast verification
- [ ] Zoom to 200% functionality test
- [ ] Mobile screen reader (TalkBack, VoiceOver iOS)

### Browser Testing Matrix

- Chrome + NVDA (Windows)
- Firefox + NVDA (Windows)
- Safari + VoiceOver (macOS, iOS)
- Chrome + TalkBack (Android)

---

## Resources

### WCAG 2.1 References

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG21/quickref/)

### UK/EU Legal Requirements

- [UK Government Accessibility Regulations](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
- [EU Web Accessibility Directive](https://ec.europa.eu/digital-single-market/en/web-accessibility)

### Testing Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)

---

## Contact for Accessibility Issues

**Email:** hello@webbit.studio  
**Response Time:** 5 business days  
**User Assistance:** We provide alternative arrangements when accessibility barriers are encountered

---

## Document Version

**Version:** 1.0  
**Last Updated:** December 7, 2025  
**Next Review:** Q1 2026 (or after major feature releases)

---

## Sign-Off

This audit provides an honest assessment of current accessibility status. The documented non-conformances in the accessibility statement protect against legal liability while demonstrating good faith commitment to improvement.

**Recommendation:** Address Phase 1 critical issues before public launch. Continue with phased improvements based on user feedback and resource availability.
