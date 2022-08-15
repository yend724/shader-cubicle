#define PI 3.141592653589793
#define PI2 PI * 2.0

void main () {
  vec4 mPosition = modelMatrix * vec4(position, 1.0);
  mPosition.z = (sin(uv.x * PI2) - 1.0);
  vec4 mvpPosition = projectionMatrix * viewMatrix * mPosition;
  gl_Position = mvpPosition;
}