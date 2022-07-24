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

renderer.shadowMap.enabled = true;
//camera
const camera = new THREE.PerspectiveCamera(
  60, // fov
  app.offsetWidth / app.offsetHeight, // aspect ratio
  0.1, // near
  1200 // far
);
camera.position.set(0, 7, 7.5);

const geo = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
const material = new THREE.MeshStandardMaterial({
  color: 0xc0c0c0,
  metalness: 1,
  roughness: 0.5
});
const mesh = new THREE.Mesh(geo, material);
mesh.castShadow = true;
scene.add(mesh);

mesh.rotateX(2 * Math.PI * Math.random()); // random angle between [-2𝜋, 2𝜋]
mesh.rotateY(2 * Math.PI * Math.random());
mesh.rotateZ(2 * Math.PI * Math.random());

// plane
const plane = new THREE.PlaneGeometry(10, 10);
const mat = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide
});
const planeMesh = new THREE.Mesh(plane, mat);
planeMesh.position.set(0, -5, 0);
planeMesh.rotateX(Math.PI / 4);
planeMesh.receiveShadow = true;
scene.add(planeMesh);

//lights
const light = new THREE.DirectionalLight({ color: 0xfff });
light.position.set(0, 5, 0);
light.castShadow = true;
scene.add(light);

const light2 = new THREE.DirectionalLight({ color: 0xfff });
light2.position.set(0, 0, 5);
scene.add(light2);

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//animate and render
let frame = 0;
function animate() {
  frame += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
  // random levitation
  // random translations in all directions
  var num = Math.random() + frame;
  mesh.position.x += 0.005 * Math.sin(num);
  mesh.position.y += 0.005 * Math.cos(num);
  mesh.position.z += 0.005 * Math.sin(num);
  // random rotations in all axes
  mesh.rotateX(0.01 * Math.cos(num));
  mesh.rotateY(0.01 * Math.sin(num));
  mesh.rotateZ(0.01 * Math.cos(num));
  controls.update();
}
animate();
