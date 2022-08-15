import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import image01 from "./images/dog.jpg";
import image02 from "./images/squirrel.jpg";

const textureLoader = new THREE.TextureLoader();
const texture01 = textureLoader.load(image01);
const texture02 = textureLoader.load(image02);

const init = () => {
  const getCanvasSize = (canvas: HTMLCanvasElement) => {
    const width = canvas.getBoundingClientRect().width;
    const height = canvas.getBoundingClientRect().width;
    return { width, height };
  };

  const canvas = document.querySelector<HTMLCanvasElement>("#webgl");
  if (!canvas) {
    console.error("No Canvas was found");
    return;
  }
  const { width, height } = getCanvasSize(canvas);

  const scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTexture01: { value: texture01 },
      uTexture02: { value: texture02 },
      uTime: { value: 0 },
    },
    transparent: true,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
  camera.position.z = 2;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const clock = new THREE.Clock();

  const loop = () => {
    const time = clock.getElapsedTime();
    material.uniforms.uTime.value = time;

    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();

  const handleResize = () => {
    const { width, height } = getCanvasSize(canvas);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
  };
  window.addEventListener("resize", handleResize);
};

window.addEventListener("DOMContentLoaded", init);
