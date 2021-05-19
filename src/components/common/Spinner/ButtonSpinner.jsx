import ClipLoader from 'react-spinners/ClipLoader';

import './spinner.scss';

import { jsx, css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
`;

function ButtonSpinner() {
  return (
    <div className="loader-container">
      <ClipLoader css={override} color={'#ddd'} size={20} />
    </div>
  );
}

export default ButtonSpinner;
