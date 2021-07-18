import FadeLoader from 'react-spinners/FadeLoader';

import { jsx, css } from '@emotion/react';

import './AppLoader.scss';

const override = css`
  display: block;
  margin: 0 auto;
`;

function AppLoader() {
  return (
    <main className="page">
      <div className="loader">
        <FadeLoader
          css={override}
          color={'#222'}
          height={20}
          width={5}
          radius={2}
          margin={2}
        />
      </div>
    </main>
  );
}

export default AppLoader;
