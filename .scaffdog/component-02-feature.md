---
name: 'component-feature'
root: 'src/components/feature'
output: '.'
ignore: []
questions:
  feature: 'Please enter feautre.'
  name: 'Please enter component name.'
---

# `{{ inputs.feature | camel }}/{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
type Props = {};
export const {{ inputs.name | pascal }}: React.FC<Props> = () => {
  return <div>{{ inputs.name | pascal }}</div>;
};
```

# `{{ inputs.feature | camel }}/{{ inputs.name | pascal }}/index.tsx`

```tsx
export * from './{{ inputs.name | pascal }}';
```