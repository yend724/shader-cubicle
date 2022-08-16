varying vec2 vUv;

float rect(vec2 uv, vec2 center, vec2 size) {
  vec2 harf = size / 2.0;
  float startX = center.x - harf.x;
  float endX = center.x + harf.x;
  float startY = center.y - harf.y;
  float endY = center.y + harf.y;

  float vertical = step(startX, uv.x) - step(endX, uv.x);
  float horizontal = step(startY, uv.y) - step(endY, uv.y);
  return  vertical * horizontal;
}

float circle(vec2 uv, vec2 center, float radius){
  return 1.0 - step(radius, distance(center, uv));
}

void main () {
  vec4 rectColor = vec4(0.0, 0.0, 1.0, 1.0) * rect(vUv, vec2(0.5, 0.5), vec2(1.0, 0.5));
  vec4 circleColor = vec4(0.0, 1.0, 0.0, 1.0) * circle(vUv, vec2(0.6, 0.5), 0.4);
  vec4 color = rectColor + circleColor;
  gl_FragColor = color;
}