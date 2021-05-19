import FadeLoader from 'react-spinners/FadeLoader';

import { jsx, css } from '@emotion/react';

import './spinner.scss';

const override = css`
  display: block;
  margin: 0 auto;
`;

function SimpleSpinner() {
  return (
    <div className="loader-container">
      <FadeLoader
        css={override}
        color={'#999'}
        height={15}
        width={5}
        radius={2}
        margin={2}
      />
    </div>
  );
}

export default SimpleSpinner;
