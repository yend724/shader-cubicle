import { css } from '@emotion/react';
import { ShaderCodeMirror } from '@/components/ui/ShaderCodeMirror';
import { Canvas } from '@react-three/fiber';
import { useShader } from './hooks';
import { calcDistFromFov } from './utils';
import { Mesh, MeshProps } from './Mesh';

const canvasStyle = css`
  width: 100%;
  aspect-ratio: 1/1;
`;
const blockStyle = css`
  margin-top: 1rem;
`;

type Props = MeshProps & {
  vertexHidden?: boolean;
  fragmentHidden?: boolean;
};
export const ShaderCanvasWithCodeMirror: React.FC<Props> = ({
  mesh,
  geometry,
  geomertyElement,
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
        css={canvasStyle}
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
          geomertyElement={geomertyElement}
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
