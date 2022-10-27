import { css } from '@emotion/react';
import { ShaderCodeMirror } from '@/components/ui/ShaderCodeMirror';
import { Canvas, useThree, ThreeElements } from '@react-three/fiber';
import { useShader } from './hooks';
import { calcDistFromFov } from './utils';

type MeshProps = {
  mesh?: ThreeElements['mesh'];
  geometry?: ThreeElements['planeGeometry'];
  material?: ThreeElements['shaderMaterial'];
};
const Mesh: React.FC<MeshProps> = ({
  mesh,
  geometry = { args: [2, 2, 64, 64] },
  material,
}) => {
  const { gl, scene, camera } = useThree();
  return (
    <mesh {...mesh}>
      <planeGeometry {...geometry} />
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

const blockStyle = css`
  margin-top: 1rem;
`;

type Props = {
  mesh?: ThreeElements['mesh'];
  geometry?: ThreeElements['planeGeometry'];
  material?: ThreeElements['shaderMaterial'];
  vertexHidden?: boolean;
  fragmentHidden?: boolean;
};
export const ShaderCodeMirrorWithCanvas: React.FC<Props> = ({
  mesh,
  geometry,
  material,
  vertexHidden = false,
  fragmentHidden = false,
}) => {
  const { shader: vShader, onChange: onVertexChange } = useShader(
    material?.vertexShader || ''
  );
  const { shader: fShader, onChange: onFragmentChange } = useShader(
    material?.fragmentShader || ''
  );
  return (
    <>
      <Canvas
        css={css`
          width: 100%;
          aspect-ratio: 1/1;
        `}
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [0, 0, calcDistFromFov(60)],
        }}
      >
        <Mesh
          mesh={mesh}
          geometry={geometry}
          material={{
            ...material,
            vertexShader: vShader,
            fragmentShader: fShader,
          }}
        />
      </Canvas>
      {!vertexHidden && (
        <div css={blockStyle}>
          <ShaderCodeMirror
            label="vertexShader"
            shader={vShader}
            height="auto"
            onChange={onVertexChange}
          />
        </div>
      )}
      {!fragmentHidden && (
        <div css={blockStyle}>
          <ShaderCodeMirror
            label="fragmentShader"
            shader={fShader}
            height="auto"
            onChange={onFragmentChange}
          />
        </div>
      )}
    </>
  );
};
