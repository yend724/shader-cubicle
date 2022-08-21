varying vec2 vUv;

float rect(vec2 uv, vec2 size, vec2 center) {
  vec2 harf = size / 2.0;
  vec2 point = uv - center;
  float vertical = step(-harf.x, point.x) - step(harf.x, point.x);
  float horizontal = step(-harf.y, point.y) - step(harf.y, point.y);
  return  vertical * horizontal;
}

float circle(vec2 uv, vec2 center, float radius){
  return 1.0 - step(radius, distance(center, uv));
}

void main () {
  vec4 rectColor = vec4(0.0, 0.0, 1.0, 1.0) * rect(vUv, vec2(1.0, 0.5), vec2(0.5, 0.5));
  vec4 circleColor = vec4(0.0, 1.0, 0.0, 1.0) * circle(vUv, vec2(0.6, 0.5), 0.4);
  vec4 color = rectColor + circleColor;
  gl_FragColor = color;
}