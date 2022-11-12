export const vertexShader = `varying vec2 vUv;

void main () {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader = `varying vec2 vUv;

void main () {
  vec3 red = vec3(1.0, 0.0, 0.0);
  vec3 blue = vec3(0.0, 0.0, 1.0);
  vec3 redToBlue = mix(red, blue, vUv.x);

  gl_FragColor = vec4(redToBlue, 1.0);
}`;

export const vertexShader02 = `varying vec2 vUv;

void main () {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader02 = `varying vec2 vUv;

void main () {
  vec3 red = vec3(1.0, 0.0, 0.0);
  vec3 green = vec3(0.0, 1.0, 0.0);
  vec3 blue = vec3(0.0, 0.0, 1.0);
  vec3[3] rgb = vec3[](
    red, green, blue
  );

  float doubleUv = vUv.x * 2.0;
  int index = doubleUv < 1.0 ? 0 : 1;

  vec3 mixed = mix(rgb[index], rgb[index+1], fract(doubleUv));

  gl_FragColor = vec4(mixed, 1.0);
}`;

export const vertexShader03 = `varying vec2 vUv;

void main () {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`;
export const fragmentShader03 = `varying vec2 vUv;

void main () {
  vec3 red = vec3(1.0, 0.0, 0.0);
  vec3 green = vec3(0.0, 1.0, 0.0);
  vec3 blue = vec3(0.0, 0.0, 1.0);
  vec3 yellow = vec3(1.0, 1.0, 0.0);

  vec3 mixedTop = mix(red, green, vUv.x);
  vec3 mixedBottom = mix(blue, yellow, vUv.x);

  vec3 mixed = mix(mixedBottom, mixedTop, vUv.y);

  gl_FragColor = vec4(mixed, 1.0);
}`;
