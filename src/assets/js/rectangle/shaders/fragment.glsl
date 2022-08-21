varying vec2 vUv;

float rect(vec2 uv, vec2 size, vec2 center) {
  vec2 harf = size / 2.0;
  vec2 point = uv - center;
  float vertical = step(-harf.x, point.x) - step(harf.x, point.x);
  float horizontal = step(-harf.y, point.y) - step(harf.y, point.y);
  return  vertical * horizontal;
}

void main () {
  vec4 color = vec4(1.0, 1.0, 0.0, 1.0) * rect(vUv, vec2(0.5, 0.8), vec2(0.5, 0.5));
  gl_FragColor = vec4(color);
}