import { css } from '@emotion/react';
import { ShaderCodeMirror } from '@/components/ui/ShaderCodeMirror';
import { Canvas, useThree } from '@react-three/fiber';
import { useShader } from './hooks';
import { calcDistFromFov } from './utils';

type MeshProps = {
  vertexShader: string;
  fragmentShader: string;
  wireframe?: boolean;
};
const Mesh: React.FC<MeshProps> = ({
  vertexShader,
  fragmentShader,
  wireframe = false,
}) => {
  const { gl, scene, camera } = useThree();
  return (
    <mesh>
      <planeGeometry args={[2, 2, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        wireframe={wireframe}
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
  vertexShader: string;
  fragmentShader: string;
  vertexHidden?: boolean;
  fragmentHidden?: boolean;
  wireframe?: boolean;
};
export const ShaderCodeMirrorWithCanvas: React.FC<Props> = ({
  vertexShader,
  fragmentShader,
  wireframe = false,
  vertexHidden = false,
  fragmentHidden = false,
}) => {
  const { shader: vShader, onChange: onVertexChange } = useShader(vertexShader);
  const { shader: fShader, onChange: onFragmentChange } =
    useShader(fragmentShader);
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
          vertexShader={vShader}
          fragmentShader={fShader}
          wireframe={wireframe}
        />
      </Canvas>
      {!vertexHidden && (
        <div css={blockStyle}>
          <ShaderCodeMirror
            label="vertexShader"
            shader={vertexShader}
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
