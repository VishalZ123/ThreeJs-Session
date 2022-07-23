import * as THREE from "three";
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(20,20,20)");

const app = document.querySelector("#app");

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(app.offsetWidth, app.offsetHeight);
app.appendChild(renderer.domElement);

//camera
const camera = new THREE.PerspectiveCamera(
  60,
  app.offsetWidth/app.offsetHeight,
  0.1,
  1200
);
camera.position.set(0, 0, 5);

//animate and render
renderer.render(scene, camera);
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
// }
// animate();
