varying vec2 vUv;

void main () {
  vec2 center = vec2(0.4);
  float radius = 0.2;
  float circle = 1.0 - step(radius, distance(center, vUv));
  vec4 color = vec4(0.0, 0.0, 1.0, 1.0) * circle;
  gl_FragColor = vec4(color);
}
