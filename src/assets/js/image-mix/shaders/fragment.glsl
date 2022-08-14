uniform sampler2D uTexture01;
uniform sampler2D uTexture02;
uniform float uTime;

varying vec2 vUv;

void main () {
  vec4 texture01 = texture2D(uTexture01, vUv);
  vec4 texture02 = texture2D(uTexture02, vUv);
  vec4 mixTexture = mix(texture01, texture02, (sin(uTime) + 1.0) * 0.5);

  gl_FragColor = vec4(mixTexture);
}