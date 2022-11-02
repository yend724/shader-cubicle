export const vertexShader = `varying vec2 vUv;

void main () {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader = `varying vec2 vUv;

void main () {
  vec3 color = vec3(vUv.x);
  gl_FragColor = vec4(color, 1.0);
}`;
