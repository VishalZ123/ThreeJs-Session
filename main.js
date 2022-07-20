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

// cube
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const cube = new THREE.Mesh(geo, material);
scene.add(cube);

// lights
const light = new THREE.DirectionalLight({color:0x0000ff});
light.position.set(3,0,0);
scene.add(light);

//animate and render
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
