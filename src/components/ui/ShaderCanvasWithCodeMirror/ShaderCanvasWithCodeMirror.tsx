import { css, Theme } from '@emotion/react';
import { ShaderCanvas, ShaderCanvasProps } from '@/components/ui/ShaderCanvas';
import { ShaderCodeMirror } from '@/components/ui/ShaderCodeMirror';
import { ShaderMesh, ShaderMeshProps } from '@/components/ui/ShaderMesh';
import { useShader } from './hooks';

const blockStyle = (theme: Theme) => css`
  margin-top: ${theme.spacing(4)};
`;

type Props = ShaderMeshProps & {
  vertexHidden?: boolean;
  fragmentHidden?: boolean;
  canvas?: ShaderCanvasProps;
};
export const ShaderCanvasWithCodeMirror: React.FC<Props> = ({
  mesh,
  geometry,
  geomertyElement,
  material,
  vertexHidden = false,
  fragmentHidden = false,
  canvas,
}) => {
  const { shader: vShader, onChange: onVertexChange } = useShader(
    material?.vertexShader || ''
  );
  const { shader: fShader, onChange: onFragmentChange } = useShader(
    material?.fragmentShader || ''
  );

  return (
    <>
      <ShaderCanvas {...canvas}>
        <ShaderMesh
          mesh={mesh}
          geometry={geometry}
          geomertyElement={geomertyElement}
          material={{
            ...material,
            vertexShader: vShader,
            fragmentShader: fShader,
          }}
        />
      </ShaderCanvas>
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
