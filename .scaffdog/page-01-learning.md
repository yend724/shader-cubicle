---
name: 'page-learning'
root: 'src/pages/learning'
output: '.'
ignore: []
questions:
  name: 'Please enter page name.'
---

# `{{ inputs.name }}/index.page.mdx`

```mdx
import { LearningLayout } from '@/components/layout/LearningLayout';
import { ShaderCodeMirrorWithCanvas } from "@/components/ui/ShaderCodeMirrorWithCanvas";

export const meta = {
  title: "タイトルが入ります",
  publishedDate: "2022-XX-XX",
  author: "YEND",
  tag: ["vetexShader", "fragmentShader"]
}

export default ({ children }) => (
  <LearningLayout title={meta.title}>{children}</LearningLayout>
);

# {meta.title}

<ShaderCodeMirrorWithCanvas
  vertexShader={`void main () {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`}
  fragmentShader={`void main () {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`}
/>
```