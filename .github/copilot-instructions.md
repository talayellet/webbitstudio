# Project Code Standards

## TypeScript Guidelines

- Always use strict type checking
- **NEVER use `any` type** - use proper types (or `unknown` if you must) instead
- Prefer object interfaces for components / hooks / functions with multiple properties
- Avoid inline type definitions - extract to named types/interfaces
- Use the const assertion pattern instead of enums:

```typescript
export const MY_THING = {
  PROP_1: 'val 1',
  PROP_2: 'val 2',
} as const;
export type MyThing = (typeof MY_THING)[keyof typeof MY_THING];
```

## React Patterns

- **DO NOT use `React.FC`** - use this pattern instead:
  ```typescript
  const MyComponent = ({ prop1, prop2 }: MyComponentProps) => {};
  ```
- Always use arrow functions, not `function` declarations
- Extract complex logic into custom hooks (stateful) or utility functions (pure)
- Break large components into smaller sub-components and hooks
- Use `useMemo` and `useCallback` for expensive operations and callback stability
- Props with 2+ arguments must use an interface, never inline typing

## Styling Conventions

- **NO hard-coded className strings** - use style constants from nearest `styles.ts`
- No inline styles
- Use `clsx` for conditional class names
- File names: `kebab-case.tsx`
- Component names: `PascalCase`

## Code Organization

- Check `@webbitstudio/shared-utils` and `@webbitstudio/ui-components` before creating new utilities
- Add JSDoc comments for all public functions/components
- Keep components focused and small
- When adding text content always localize it

## Code Quality

- Use async/await instead of `.then()` chains
- Never disable ESLint rules
- Address & fix any lint errors & warnings in the code you generate
- We use **yarn** (not npm) in this repo

## Before Taking Action

1. Analyze existing codebase patterns first
2. Check shared libraries for existing solutions
3. Consider edge cases and error scenarios
4. Ensure changes align with testing standards
