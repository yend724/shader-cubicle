import { createElement } from 'react';
import { useThree, ThreeElements } from '@react-three/fiber';

export type ShaderMeshProps = {
  mesh?: ThreeElements['mesh'];
  geometry?: ThreeElements['planeGeometry'];
  geomertyElement?: 'planeGeometry';
  material?: ThreeElements['shaderMaterial'];
};

export const ShaderMesh: React.FC<ShaderMeshProps> = ({
  mesh,
  geomertyElement = 'planeGeometry',
  geometry = { args: [2, 2, 64, 64] },
  material,
}) => {
  const { gl, scene, camera } = useThree();
  return (
    <mesh {...mesh}>
      {createElement(geomertyElement, { ...geometry }, '')}
      <shaderMaterial
        {...material}
        onUpdate={v => {
          if (v.isShaderMaterial) {
            gl.compile(scene, camera);
          }
        }}
      />
    </mesh>
  );
};
