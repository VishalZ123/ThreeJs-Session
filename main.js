import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(20,20,20)");

const app = document.querySelector("#app");

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // WebGL Renderer
renderer.setPixelRatio(window.devicePixelRatio); // set device pixel ratio
renderer.setSize(app.offsetWidth, app.offsetHeight); // Resizes the output canvas to given width and height
app.appendChild(renderer.domElement);

//camera
const camera = new THREE.PerspectiveCamera(
  60, // fov
  app.offsetWidth / app.offsetHeight, // aspect ratio
  0.1, // near
  1200 // far
);
camera.position.set(0, 2, 50);

const geometry = new THREE.SphereGeometry(20,100,100);
const loader = new THREE.TextureLoader();
const material = new THREE.MeshStandardMaterial({
  map: loader.load("./textures/colormap.jpg")
})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// lights
const light1 = new THREE.HemisphereLight({ color: 0xffffff });
// const h1 = new THREE.HemisphereLightHelper(light1, 2);
light1.position.set(30, 0, 0);
// scene.add(h1);
scene.add(light1);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//animate and render
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  controls.update();
}
animate();
