export default `
//#extension GL_EXT_frag_depth : enable
#define STEPS 64
#define STEP_SIZE 0.01

varying vec3 pos;
//uniform sampler2d depthTex;

float sphere(vec3 pos, float x, float y, float z, float r) {
  return distance(pos, vec3(x, y, z)) - r;
}

float world(vec3 pos) {
  return sphere(pos, 0.0, 0.0, 0.0, 0.5);
}

bool raycast(vec3 pos, vec3 dir) {
  for(int i=0; i<STEPS; i++) {
    float d = world(pos);
    if (d < 0.01) {
      return true;
    }
    pos += dir * max(d, STEP_SIZE);
  }
  return false;
}

void main() {
  vec3 worldPos = pos;
  vec3 viewDir = normalize(pos - cameraPosition);
  if(raycast(worldPos, viewDir)) {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.6);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.3);
  }
  //gl_FragDepthEXT = 0.0;
}
`