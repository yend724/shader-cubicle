---
name: 'component-ui'
root: 'src/components/ui'
output: '.'
ignore: []
questions:
  name: 'Please enter component name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
type Props = {};
export const {{ inputs.name | pascal }}: React.FC<Props> = () => {
  return <div>{{ inputs.name | pascal }}</div>;
};
```

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
export * from './{{ inputs.name | pascal }}';
```