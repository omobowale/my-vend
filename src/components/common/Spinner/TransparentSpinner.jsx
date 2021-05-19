import FadeLoader from 'react-spinners/FadeLoader';

import './spinner.scss';

import { jsx, css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

function TransparentSpinner() {
  return (
    <div className="transparent-spinner">
      <FadeLoader
        css={override}
        color={'#ddd'}
        height={20}
        width={5}
        radius={2}
        margin={2}
      />
    </div>
  );
}

export default TransparentSpinner;
