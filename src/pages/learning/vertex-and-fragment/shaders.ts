export const vertexShader = `varying vec2 vUv;

void main () {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader = `varying vec2 vUv;

void main () {
  // (R, G, B) = (1.0, 1.0, 1.0) なので白
  vec3 white = vec3(1.0, 1.0, 1.0);

  // (R, G, B) = (0.0, 0.0, 0.0) なので黒
  vec3 black = vec3(0.0, 0.0, 0.0);

  // UV座標のX軸を基準に線形補間
  // vUx.x は 0 ~ 1 の間
  vec3 mixed = mix(white, black, vUv.x);

  gl_FragColor = vec4(mixed, 1.0);
}`;
