uniform sampler2D uTexture;
uniform float uTime;
varying vec2 vUv;

void main () {
  vec3 rgb = vec3(0.0);
  rgb.r = texture2D(uTexture, vUv + vec2(0., sin(uTime * 5.0) * 0.01)).r;
  rgb.g = texture2D(uTexture, vUv + vec2(cos(uTime * 5.0) * 0.01), 0.).g;
  rgb.b = texture2D(uTexture, vUv + cos(uTime * 5.0) * 0.01).b;
  gl_FragColor = vec4(rgb, 1.0);
}