uniform float uTick;

varying vec2 vUv;

void main () {
  float r = (sin(uTick + vUv.x) + 1.0) * 0.5;
  float g = (sin(uTick + vUv.y) + 1.0) * 0.5;
  float b = (cos(uTick + vUv.x) + 1.0) * 0.5;
  gl_FragColor = vec4(r, g, b, 1.0);
}