import { BoxGeometry, Mesh, ShaderMaterial } from './lib/three/three.js';
import cloudFragment from './shade/cloud.frag';
import cloudVertex from './shade/cloud.vert';

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
