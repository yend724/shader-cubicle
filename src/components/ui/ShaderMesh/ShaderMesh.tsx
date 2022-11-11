import { createElement, useEffect, useMemo, useRef } from 'react';
import { useThree, useFrame, ThreeElements } from '@react-three/fiber';
import { ShaderMaterial } from 'three';

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
  const ref = useRef<ShaderMaterial>(null);
  const { gl, scene, camera, size } = useThree();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const uniforms = useMemo(() => {
    return {
      uResolution: {
        value: { x: size.width, y: size.height },
      },
      uTime: { value: 0.0 },
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.uniforms.uResolution.value = {
        x: size.width,
        y: size.height,
      };
    }
  }, [size]);

  return (
    <mesh {...mesh}>
      {createElement(geomertyElement, { ...geometry }, '')}
      <shaderMaterial
        {...material}
        ref={ref}
        onUpdate={v => {
          if (v.isShaderMaterial) {
            gl.compile(scene, camera);
          }
        }}
        uniforms={uniforms}
      />
    </mesh>
  );
};
