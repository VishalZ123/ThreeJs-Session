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
camera.position.set(0, 2, 5);

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({color: 0xc0c0c0});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// lights
// const light = new THREE.AmbientLight({color: 0x000});
// const light = new THREE.DirectionalLight({color: 0xfff});
// scene.add(light);

const light1 = new THREE.DirectionalLight({color:0xffffff});
const helper1 = new THREE.DirectionalLightHelper( light1, 5, true );
light1.position.set(2, 2, 4);

const light2 = new THREE.DirectionalLight({color: 0xffffff});
const helper2 = new THREE.DirectionalLightHelper( light2, 5, true );
light2.position.set(-2, -2, -4);

scene.add(light1, light2, helper1, helper2);

// light1.lookAt(new THREE.Vector3(0,0,0));

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
