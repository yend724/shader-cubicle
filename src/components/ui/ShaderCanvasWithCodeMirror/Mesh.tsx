import { createElement } from 'react';
import { useThree, ThreeElements } from '@react-three/fiber';

export type MeshProps = {
  mesh?: ThreeElements['mesh'];
  geometry?: ThreeElements['planeGeometry'] | ThreeElements['boxGeometry'];
  geomertyElement?: 'planeGeometry' | 'boxGeometry';
  material?: ThreeElements['shaderMaterial'];
};

export const Mesh: React.FC<MeshProps> = ({
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
