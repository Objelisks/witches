export default `
varying vec3 pos;
varying float depth;

void main() {
  pos = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  depth = -mvPos.z;
  gl_Position = projectionMatrix * mvPos;
}
`