---
name: 'component-layout'
root: 'src/components/layout'
output: '.'
ignore: []
questions:
  name: 'Please enter layout name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
type Props = {
  children: React.ReactNode;
};
export const {{ inputs.name | pascal }}: React.FC<Props> = ({children}) => {
  return <div>{children}</div>;
};
```

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
export * from './{{ inputs.name | pascal }}';
```