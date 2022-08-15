#define PI 3.141592653589793
#define PI2 PI * 2.0

uniform float uTime;

void main () {
  vec4 mPosition = modelMatrix * vec4(position, 1.0);
  mPosition.z = sin(uTime + uv.y * PI2) * (uv.x - 0.5) * 2.0;
  mPosition.x = cos(uTime + uv.y * PI2) * (uv.x - 0.5) * 2.0;
  gl_Position = projectionMatrix * viewMatrix * mPosition;
}