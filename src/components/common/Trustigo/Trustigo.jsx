import React from 'react';

function Trustigo() {
  const openSectigo = () => {
    window.open(
      'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=CL1&v_search=http://localhost:3000/create-order/whyconceptlimited/145&x=6&y=5'
    );
  };

  const imageMouseDown = (event) => {
    return window.tLKB(
      event,
      'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=W&v_shortname=CL1&v_search=http://localhost:3000/create-order/whyconceptlimited/145&x=6&y=5'
    );
  };

  const imageContextMenu = (event) => {
    return window.tLLB(event);
  };

  const mouseOver = (event) => {
    window.tLeB(
      event,
      'http://www.trustlogo.com/ttb_searcher/trustlogo?v_querytype=C&v_shortname=CL1&v_search=http://localhost:3000/create-order/whyconceptlimited/145&x=6&y=5',
      'tl_popupCL1'
    );
  };

  const mouseMove = (event) => {
    window.tLXB(event);
  };

  const mouseOut = (event) => {
    window.tLTC('tl_popupCL1');
  };

  return (
    <div
      onClick={openSectigo}
      onMouseOver={mouseOver}
      onMouseMove={mouseMove}
      onMouseOut={mouseOut}
      className="badge"
    >
      <img
        src="https://www.terawork.com/images/positivessl_trust_seal_md_167x42.png"
        alt=""
        onMouseDown={imageMouseDown}
        onContextMenu={imageContextMenu}
      />
      <a href="https://ssl.comodo.com" id="comodoTL">
        SSL Certificates
      </a>
    </div>
  );
}

export default Trustigo;
