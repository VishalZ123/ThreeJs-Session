import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(20,20,20)");

const app = document.querySelector("#app");

//renderer
const renderer = new THREE.WebGLRenderer(); // WebGL Renderer
renderer.setPixelRatio(window.devicePixelRatio); // set device pixel ratio
renderer.setSize(app.offsetWidth, app.offsetHeight); // Resizes the output canvas to given width and height
app.appendChild(renderer.domElement);

//camera
const camera = new THREE.PerspectiveCamera(
  60, // fov
  app.offsetWidth/app.offsetHeight, // aspect ratio
  0.1, // near
  1200 // far
);
camera.position.set(0, 0, 5);

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//animate and render
renderer.render(scene, camera);
// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
// }
// animate();
