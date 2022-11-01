export const vertexShader = `varying vec4 vColor;

void main () {
  vColor = vec4(0.0, 0.0, 1.0, 1.0);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader = `varying vec4 vColor;

void main () {
  gl_FragColor = vec4(vColor);
}`;
