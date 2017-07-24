import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry,
  MeshStandardMaterial, Mesh, AmbientLight, DirectionalLight,
  PlaneGeometry, PCFSoftShadowMap } from './lib/three/three.js';
import { World, NaiveBroadphase, Sphere, Vec3, Body, Plane } from './lib/cannon/cannon.js';
import { c } from './constants.js';
import { Cloud } from './cloud.js';

const scene = new Scene();
const camera = new PerspectiveCamera(45, c.width / c.height, 0.1, 1000);

const world = new World();
world.gravity.set(0, 0, -9.82);
world.broadphase = new NaiveBroadphase();
world.defaultContactMaterial.friction = 1.0;
world.defaultContactMaterial.restitution = 0.001;

const renderer = new WebGLRenderer();
renderer.setSize(c.width, c.height);
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

const shape = new Sphere(0.5);
const body = new Body({ mass: 5, shape: shape });
body.position.set(0, 0, 5);
world.add(body);

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

const groundShape = new Plane();
const groundBody = new Body({ mass: 0, shape: groundShape });
world.add(groundBody);

const cloud = new Cloud(10, 5, 10);
cloud.position.y = 2.5;
scene.add(cloud);

const animate = () => {
  requestAnimationFrame(animate);
  world.step(c.timeStep);
  cube.position.set(body.position.x, body.position.z, body.position.y);
  cube.quaternion.set(body.quaternion.x, body.quaternion.z,
      body.quaternion.y, -body.quaternion.w);
  renderer.render(scene, camera);
};
animate();
