import * as THREE from "three";
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(20,20,20)");

//camera
const camera = new THREE.PerspectiveCamera(
  60,
  innerWidth / innerHeight,
  0.1,
  1200
);
camera.position.set(3, 1, 4);

//renderer
const app = document.querySelector("#app");
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(app.offsetWidth, app.offsetHeight);
app.appendChild(renderer.domElement);

//animate and render
renderer.render(scene, camera);
// function animate() {
//   requestAnimationFrame(animate);
// }
// animate();
