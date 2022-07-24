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

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
// const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const material = new THREE.MeshPhongMaterial({ color: 0x00ffff});
const material2 = new THREE.MeshLambertMaterial({ color: 0x00ffff});
const mesh1 = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometry, material2);
mesh1.position.x = -20;
mesh2.position.x = 20;

scene.add(mesh1, mesh2);

// lights
const light = new THREE.DirectionalLight({color: 0x000});
light.position.set(0,0,10);
scene.add(light);

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
