export const vertexShader = `void main () {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader = `void main () {
  float red =  fract(gl_FragCoord.x / 100.0);
  gl_FragColor = vec4(red, 0.0, 0.0, 1.0);
}`;
export const vertexShader02 = `varying vec2 vUv;

void main () {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader02 = `varying vec2 vUv;

void main () {
  float red =  vUv.x;
  gl_FragColor = vec4(red, 0.0, 0.0, 1.0);
}`;
