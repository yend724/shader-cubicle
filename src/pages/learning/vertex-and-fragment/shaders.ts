export const vertexShader = `void main () {
  vec3 myPosition = position;
  myPosition.y += cos(myPosition.x); // オブジェクトのY座標をconで歪める
  vec4 modelPosition = modelMatrix * vec4(myPosition, 1.0);
  modelPosition.z += -1.0; // オブジェクトの位置をZ軸方向に-1
  modelPosition.y += -1.0; // オブジェクトの位置をY軸方向に-1
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}`;
export const fragmentShader = `void main () {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;
export const vertexShader02 = `void main () {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);;
}`;
export const fragmentShader02 = `void main () {
  // (赤、緑、青、透過度) = (1.0, 0.0, 0.0, 1.0);
  vec4 rgba = vec4(1.0, 0.0, 0.0, 1.0);
  gl_FragColor = vec4(rgba);
}`;
