varying vec2 vUv;

void main () {
  vec3 color = vec3(0.0);
  color.r = step(0.5, vUv.x);
  color.b = step(0.5, vUv.y);
  gl_FragColor = vec4(color, 1.0);
}