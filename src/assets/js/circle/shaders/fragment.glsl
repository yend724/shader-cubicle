varying vec2 vUv;

void main () {
  vec2 center = vec2(0.5, 0.5);
  float b = distance(vUv, center) < 0.5 ? 1.0: 0.0;
  gl_FragColor = vec4(0.0, 0.0, b, 1.0);
}