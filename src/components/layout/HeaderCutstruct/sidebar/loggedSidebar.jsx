import React, { Fragment, useState } from 'react';
import { sellerApp } from '../../../../utils/sellerApp';
import Auth from '../../../../utils/Auth';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
  faHeart,
  faBuilding,
  faStar,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import Headlines from '../Headlines/Headlines';

function LoggedSidebar({
  closeSidebar,
  buyer,
  dispatch,
  seller,
  application,
  notifications,
}) {
  const auth = new Auth();
  const [headline, setHeadlines] = useState(false);

  const toggleheadlines = () => setHeadlines(!headline);

  const user = application === 'seller' ? seller : buyer;

  return (
    <Fragment>
      <div className="user-info">
        <img src={user?.['logo_or_profile_pic'] || user?.avatar} alt="user" />
        <li className="user-nav-item">
          <span className="user-info-name">{user?.username}</span>
          <span className="user-info-email grey-text"> {user?.email}</span>
          <div className="user-info-actions" onClick={closeSidebar}>
            <Link
              to={`${
                application === 'seller' ? '/services' : ''
              }/personal-info`}
              className="nav-action green-text"
            >
              Personal Info
            </Link>
            <span className="nav-action green-text" onClick={auth.Logout}>
              Logout
            </span>
          </div>
        </li>
      </div>
      <hr />
      <li className="nav-item" onClick={closeSidebar}>
        <FontAwesomeIcon icon={faBell} />
        <a href="#0" onClick={toggleheadlines}>
          Headlines
        </a>
      </li>
      {application === 'seller' ? (
        <>
          <li className="nav-item" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faBuilding} />
            <Link to="/services/work">Work</Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faCommentAlt} />
            <Link
              to={{
                pathname: '/peer/chats',
                state: { application: 'seller' },
              }}
            >
              Chat
            </Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.526 3.79H2.368a1.421 1.421 0 110-2.843h15.158a.474.474 0 000-.947H2.368A2.368 2.368 0 000 2.368v13.264A2.368 2.368 0 002.368 18h15.158a.474.474 0 00.474-.474V4.263a.474.474 0 00-.474-.474zm-.473 8.526h-4.737a1.42 1.42 0 110-2.842h4.737v2.842zm0 4.737H2.368a1.421 1.421 0 01-1.42-1.421V4.263c.41.308.908.474 1.42.474h14.685v3.79h-4.737a2.368 2.368 0 100 4.736h4.737v3.79z"
                fill="#777"
              />
              <path
                d="M11.842 10.895a.473.473 0 10.947 0 .473.473 0 00-.947 0zM2.842 1.895a.474.474 0 100 .947h12.79a.474.474 0 100-.947H2.842z"
                fill="#777"
              />
            </svg>
            <Link to="/services/wallet">Wallet</Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faStar} />
            <Link to="/services/reviews">Reviews</Link>
          </li>
          <li className="nav-item app-switch buy" onClick={closeSidebar}>
            <a href="/">Switch to Buying</a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faBuilding} />
            <Link to="/work">Work</Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <Link
              to={{
                pathname: '/peer/chats',
                state: { application: 'buyer' },
              }}
            >
              <FontAwesomeIcon icon={faCommentAlt} />
              Chat
            </Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#777"
                d="M 700 738C 672 738 650 760 650 788C 650 815 672 837 700 837C 728 837 750 815 750 788C 750 760 728 738 700 738C 700 738 700 738 700 738M 250 738C 222 738 200 760 200 788C 200 815 222 837 250 837C 278 837 300 815 300 788C 300 760 278 738 250 738C 250 738 250 738 250 738M 700 688C 755 688 800 733 800 788C 800 842 755 887 700 887C 645 887 600 842 600 788C 600 733 645 688 700 688C 700 688 700 688 700 688M 250 688C 305 688 350 733 350 788C 350 842 305 887 250 887C 195 887 150 842 150 788C 150 733 195 688 250 688C 250 688 250 688 250 688M 110 263C 110 263 193 512 193 512C 193 512 679 512 679 512C 679 512 720 263 720 263C 720 263 110 263 110 263M 75 213C 75 213 750 213 750 213C 757 213 764 216 769 221C 774 227 776 234 775 242C 775 242 725 542 725 542C 723 554 712 562 700 563C 700 563 175 563 175 563C 164 562 155 556 151 545C 151 545 51 245 51 245C 49 238 50 229 55 223C 59 216 67 213 75 213C 75 213 75 213 75 213M 850 163C 850 163 925 163 925 163C 934 162 942 167 947 175C 951 183 951 192 947 200C 942 208 934 213 925 213C 925 213 871 213 871 213C 871 213 800 642 800 642C 798 654 787 662 775 663C 775 663 200 663 200 663C 191 663 183 658 178 650C 174 642 174 633 178 625C 183 617 191 612 200 613C 200 613 754 613 754 613C 754 613 825 183 825 183C 827 171 838 163 850 163C 850 163 850 163 850 163"
                transform="translate(1000,0) scale(-1,1)"
              />
            </svg>
            <Link to="/pending-orders">Pending Orders</Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="23"
              viewBox="0 0 18 23"
              className="svg icon replaced-svg"
            >
              <path
                fill="#777"
                d="M20.791392,51.2760478 C20.7915828,50.0760298 20.7943322,48.8880391 20.8025361,48.1815043 C20.8244612,46.3143067 22.0293186,44.7260161 23.7838316,44.1850285 C25.5118307,43.652199 27.4376649,44.2997525 28.4635528,45.7468051 C28.9749671,46.467782 29.1804506,47.2856369 29.1911582,48.1458123 C29.1994021,48.8615323 29.2036069,50.0634068 29.2058116,51.2751187 C29.7945839,51.2732012 30.3833618,51.2714845 30.9716754,51.2790534 C32.4110797,51.2984291 33.3604849,52.1902173 33.4461455,53.6296216 C33.6393918,56.9122589 33.828559,60.1954061 33.9947814,63.4805929 C34.0814618,65.1978843 33.0836175,66.2135745 31.3530691,66.2186734 C29.2237908,66.224792 27.0950225,66.220203 24.9672739,66.220203 C22.8736875,66.220203 20.7795913,66.2227524 18.686005,66.2186734 C17.9721665,66.2176536 17.2950397,66.0845737 16.7494631,65.5767286 C16.224282,65.0877492 15.9718891,64.4672196 16.0024821,63.7640887 C16.0753956,62.0569949 16.1829813,60.3529605 16.2742506,58.6463766 C16.3650101,56.9525398 16.4267062,55.2566635 16.5490785,53.5643564 C16.6541147,52.1178137 17.5979112,51.2826226 19.0719877,51.2790534 C19.6450611,51.2776366 20.2182045,51.2766747 20.791392,51.2760478 Z M22.0469746,51.2751638 C24.008291,51.274474 25.9699015,51.276681 27.9307675,51.2769806 C27.9283429,50.0004294 27.9249544,48.7207591 27.9093082,47.9535858 C27.8980908,47.4074994 27.7369672,46.9037334 27.4157399,46.454525 C26.7171979,45.4786058 25.3807903,45.035516 24.1835812,45.3873364 C22.9430318,45.7529237 22.0925443,46.8359187 22.0634808,48.1896624 C22.0483362,48.893762 22.0455222,50.0781504 22.0469746,51.2751638 Z M20.7920232,52.5343903 C20.3451417,52.5343894 19.8982491,52.5343894 19.4513418,52.5343894 C18.1236022,52.5343894 17.8146121,52.8291027 17.7508766,54.1553127 C17.6917299,55.3861742 17.6371723,56.6170357 17.5713972,57.8473874 C17.4689104,59.7507867 17.3434787,61.6531663 17.2567983,63.5570756 C17.213968,64.514129 17.6244252,64.9194873 18.5789292,64.9623176 C18.6717282,64.9663967 18.7645272,64.9633374 18.8578361,64.9633374 C20.9070625,64.9638473 22.9542493,64.9628275 25.001946,64.9628275 C27.1077696,64.9628275 29.2135931,64.9663967 31.3199266,64.9618077 C32.3626407,64.9597682 32.7919635,64.518718 32.7389355,63.4805929 C32.657354,61.8785353 32.5558869,60.2769877 32.4651275,58.6759499 C32.3723285,57.0397301 32.2866679,55.4030004 32.1913194,53.7667806 C32.1484891,53.0213293 31.7915699,52.6134215 31.1440164,52.5486662 C30.9834027,52.5328598 30.81871,52.5348993 30.6565667,52.5348993 C30.1735231,52.5348334 29.6904965,52.534776 29.2074826,52.534726 C29.2080217,53.1294919 29.2082231,53.6828603 29.2083618,54.1306069 C29.4797524,54.3271962 29.6528043,54.6478855 29.6531137,55.0170177 C29.6531137,55.6115432 29.1651541,56.1035819 28.5685891,56.1102104 C27.9710043,56.1173488 27.468258,55.5998159 27.4794755,54.9899938 C27.4863018,54.6179586 27.6643918,54.3021929 27.9408937,54.1133655 C27.9368689,53.6661107 27.9347554,53.1206685 27.9332921,52.5346106 C25.9720738,52.5344572 24.011,52.5344102 22.0497754,52.5343958 C22.0515563,53.1237978 22.0537076,53.6726738 22.0551348,54.1175653 C22.3370859,54.3128331 22.5179816,54.6396051 22.5182979,55.0170177 C22.5182979,55.6115432 22.0308482,56.1035819 21.4337733,56.1102104 C20.8366984,56.1173488 20.3339521,55.5998159 20.3446597,54.9899938 C20.3523025,54.6234471 20.5254598,54.3115219 20.7947866,54.1218052 C20.7937225,53.6759844 20.7926701,53.1255711 20.7920232,52.5343903 Z"
                transform="translate(-16 -44)"
              ></path>
            </svg>
            <Link to="/workstore">WorkStore</Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.526 3.79H2.368a1.421 1.421 0 110-2.843h15.158a.474.474 0 000-.947H2.368A2.368 2.368 0 000 2.368v13.264A2.368 2.368 0 002.368 18h15.158a.474.474 0 00.474-.474V4.263a.474.474 0 00-.474-.474zm-.473 8.526h-4.737a1.42 1.42 0 110-2.842h4.737v2.842zm0 4.737H2.368a1.421 1.421 0 01-1.42-1.421V4.263c.41.308.908.474 1.42.474h14.685v3.79h-4.737a2.368 2.368 0 100 4.736h4.737v3.79z"
                fill="#777"
              />
              <path
                d="M11.842 10.895a.473.473 0 10.947 0 .473.473 0 00-.947 0zM2.842 1.895a.474.474 0 100 .947h12.79a.474.474 0 100-.947H2.842z"
                fill="#777"
              />
            </svg>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li className="nav-item" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faHeart} />
            <Link to="/saved">Saved</Link>
          </li>
          <li className="nav-item app-switch sell" onClick={closeSidebar}>
            <a href="#0" onClick={sellerApp}>
              Switch to Selling
            </a>
          </li>
        </>
      )}
      {headline ? (
        <Headlines
          notifications={notifications}
          show={headline}
          application={application}
          toggleShow={toggleheadlines}
          dispatch={dispatch}
        />
      ) : null}
    </Fragment>
  );
}

export default LoggedSidebar;
