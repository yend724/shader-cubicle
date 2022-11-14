import { css } from '@emotion/react';
import { githubDark } from '@uiw/codemirror-theme-github';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';

type Props = {
  label: string;
  height?: string;
  shader: string;
  onChange?: ReactCodeMirrorProps['onChange'];
};

const labelStyle = css`
  display: inline-block;
  font-weight: var(--font-weight-bold);
  line-height: 1;
`;
export const ShaderCodeMirror: React.FC<Props> = ({
  shader,
  label,
  height = 'auto',
  onChange,
}) => {
  return (
    <div>
      <span css={labelStyle}>{label}</span>
      <CodeMirror
        value={shader}
        height={height}
        theme={githubDark}
        onChange={onChange}
      />
    </div>
  );
};
