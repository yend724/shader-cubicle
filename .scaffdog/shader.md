---
name: 'shader'
root: '.'
output: './src'
ignore: ["."]
questions:
  value: 'Please enter any filename'
---

# `pages/code/{{ inputs.value }}/index.astro`

```astro
---
import fs from "fs";
const url = Astro.url;
import route from "../../../data/route.json";
import Code from "../../../components/Code.astro";
import ShaderLayout from '../../../layouts/ShaderLayout.astro';
import vertex from "../../../assets/js/{{ inputs.value }}/shaders/vertex.glsl";
import fragment from "../../../assets/js/{{ inputs.value }}/shaders/fragment.glsl";
import { getCurrentPage } from "../../../utils/getCurrentPage";

const { title, path } = getCurrentPage({ url, route });
const script = fs.readFileSync(`${process.cwd()}/src/assets/js/${path}/index.ts`, "utf8");
---

<ShaderLayout title={title}>
  <Code lang={"glsl"} label={"vertexShader"} code={vertex} />
  <Code lang={"glsl"} label={"fragmentShader"} code={fragment} />
  <Code lang={"ts"} label={"TypeScript"} code={script} />
</ShaderLayout>

<script>
  import "../../../assets/js/{{ inputs.value }}/index.ts"
</script>
```

# `assets/js/{{ inputs.value }}/index.ts`

```ts
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

const init = () => {
  const getCanvasSize = (canvas: HTMLCanvasElement) => {
    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().width;
    return { width, height };
  };

  const canvas = document.querySelector<HTMLCanvasElement>("#webgl");
  if (!canvas) {
    console.error("No Canvas was found");
    return;
  }
  const { width, height } = getCanvasSize(canvas);

  const scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.z = 2;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const loop = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  const handleResize = () => {
    const { width, height } = getCanvasSize(canvas);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
  };
  window.addEventListener("resize", handleResize);
};

window.addEventListener("DOMContentLoaded", init);
```

# `assets/js/{{ inputs.value }}/shaders/vertex.glsl`

```glsl
void main () {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}
```

# `assets/js/{{ inputs.value }}//shaders/fragment.glsl`

```glsl
void main () {
  gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
```