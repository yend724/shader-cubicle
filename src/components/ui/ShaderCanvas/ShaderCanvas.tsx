import { css } from '@emotion/react';
import { Canvas, RenderProps } from '@react-three/fiber';
import type { Options as ResizeOptions } from 'react-use-measure';
import { calcDistFromFov } from './utils';

const canvasStyle = css`
  width: 100%;
  aspect-ratio: 1/1;
`;

export interface ShaderCanvasProps
  extends Omit<RenderProps<HTMLCanvasElement>, 'size'>,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  resize?: ResizeOptions;
  eventSource?: HTMLElement | React.MutableRefObject<HTMLElement>;
  eventPrefix?: 'offset' | 'client' | 'page' | 'layer' | 'screen';
}

export const ShaderCanvas: React.FC<ShaderCanvasProps> = ({
  children,
  ...others
}) => {
  return (
    <Canvas
      css={canvasStyle}
      camera={{
        fov: 60,
        near: 0.1,
        far: 1000,
        position: [0, 0, calcDistFromFov(60)],
      }}
      {...others}
    >
      {children}
    </Canvas>
  );
};
