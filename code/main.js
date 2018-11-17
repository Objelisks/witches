import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry,
  MeshStandardMaterial, Mesh, AmbientLight, DirectionalLight,
  PlaneGeometry } from './lib/three/three.module.js';
import { c } from './constants.js';
import { Cloud } from './cloud.js';

const scene = new Scene();
const camera = new PerspectiveCamera(45, c.width / c.height, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(c.width, c.height);
renderer.setClearColor(0x222222);
renderer.extensions.get('EXT_frag_depth');
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;

const geo = new BoxGeometry(1, 1, 1);
const mat = new MeshStandardMaterial({ color: 0xaadbcc, metalness: 0.2, roughness: 0.8 });
const cube = new Mesh(geo, mat);
cube.castShadow = true;
scene.add(cube);

camera.position.x = 15;
camera.position.y = 15;
camera.position.z = 15;
camera.lookAt(cube.position);

const ambient = new AmbientLight(0x9999cc);
scene.add(ambient);
const directional = new DirectionalLight(0xabcabc, 1.0);
directional.position.set(10, 10, 0);
directional.castShadow = true;
directional.shadow.camera.near = 1;
directional.shadow.camera.far = 20;
directional.shadow.camera.right = 5;
directional.shadow.camera.left = -5;
directional.shadow.camera.top	= 5;
directional.shadow.camera.bottom = -5;
directional.shadow.mapWidth = 2048;
directional.shadow.mapHeight = 2048;
scene.add(directional);

const groundGeo = new PlaneGeometry(10, 10);
groundGeo.rotateX(-90 * Math.PI / 180);
const groundMat = new MeshStandardMaterial({ color: 0xcd9a9a, metalness: 0.0, roughness: 0.8 });
const ground = new Mesh(groundGeo, groundMat);
ground.receiveShadow = true;
scene.add(ground);

const cloud = new Cloud(10, 5, 10);
cloud.position.y = 2.5;
scene.add(cloud);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();
