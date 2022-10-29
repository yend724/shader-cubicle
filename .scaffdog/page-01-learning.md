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
import { ShaderCanvasWithCodeMirror } from "@/components/ui/ShaderCanvasWithCodeMirror";
import { vertexShader, fragmentShader } from "./shaders.ts";
export const meta = {
  title: "タイトルが入ります",
  published: "0000-00-00",
  author: "YEND",
  tag: ["頂点シェーダー", "フラグメントシェーダー"]
}
export default ({ children }) => (
  <LearningLayout meta={meta}>{children}</LearningLayout>
);

<ShaderCanvasWithCodeMirror
  material={{"{{
    vertexShader,
    fragmentShader
  }}"}}
/>
```

# `{{ inputs.name }}/shaders.ts`

```ts
export const vertexShader = `void main () {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader = `void main () {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;
```