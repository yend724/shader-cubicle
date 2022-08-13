varying vec2 vUv;

float rect(vec2 point, vec2 size, vec2 center) {
  vec2 harf = size / 2.0;
  float startX = center.x - harf.x;
  float endX = center.x + harf.x;
  float startY = center.y - harf.y;
  float endY = center.y + harf.y;

  float vertical = step(startX, point.x) - step(endX, point.x);
  float horizontal = step(startY, point.y) - step(endY, point.y);
  return  vertical * horizontal;
}

void main () {
  vec3 color = vec3(1.0, 1.0, 0.0) * rect(vUv, vec2(0.5, 0.8), vec2(0.5, 0.5));
  gl_FragColor = vec4(color, 1.0);
}