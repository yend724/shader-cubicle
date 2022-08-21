varying vec2 vUv;

uniform float uTime;

mat2 rotate(float theta) {
  float s = sin(theta);
  float c = cos(theta);

  return mat2(c, -s, s, c);
}

float rect(vec2 uv, vec2 size, vec2 center, mat2 rotate) {
  vec2 harf = size / 2.0;
  vec2 point = (uv - center) * rotate;
  float vertical = step(-harf.x, point.x) - step(harf.x, point.x);
  float horizontal = step(-harf.y, point.y) - step(harf.y, point.y);
  return  vertical * horizontal;
}

void main () {
  mat2 rotate = rotate(uTime);
  vec4 color = vec4(0.0, 0.0, 1.0, 1.0) * rect(vUv, vec2(0.5), vec2(0.5), rotate);
  gl_FragColor = color;
}