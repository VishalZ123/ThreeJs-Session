import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

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
camera.position.set(0, 0, 5);

var loader = new GLTFLoader();
loader.crossOrigin = true;
loader.load("./models/scene.gltf", function (data) {
  data.scene.scale.set(5, 5, 5);
  var object = data.scene;
  object.position.set(0, -10, 0);
  scene.add(object);
});

//lights
var light = new THREE.PointLight(0xffffcc, 4);
light.position.set(0, -10, 20);
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
