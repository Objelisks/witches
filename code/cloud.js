import { BoxGeometry, Mesh, ShaderMaterial } from './lib/three/three.module.js';
import cloudFragment from './shade/cloud.frag.js';
import cloudVertex from './shade/cloud.vert.js';

class Cloud extends Mesh {
  constructor(x, y, z) {
    const geom = new BoxGeometry(x, y, z);
    const shader = new ShaderMaterial({
      fragmentShader: cloudFragment,
      vertexShader: cloudVertex,
    });
    shader.transparent = true;
    super(geom, shader);
  }
}

export { Cloud };
