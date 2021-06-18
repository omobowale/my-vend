import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ closeSidebar, openAuthPage, user={} }) {
  const location = useLocation();
  const [dropDown, setDropDown] = useState(false);
  const wrapperRef = useRef(null);
  const dropRef = useRef(null);

  const toggleDropDown = () => setDropDown(!dropDown);

  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }

  useOutsideAlerter(wrapperRef);


  return (
    <Fragment>
      <li className="nav-item" onClick={closeSidebar}>
          <Link to="/">Request Quantity Survey</Link>
      </li>
      <li className="nav-item" onClick={closeSidebar}>
          <Link to="/">
              Construction Consultation
          </Link>
      </li>
      <div
        className={`drop_down_menu ${dropDown ? 'show' : ''}`}
        ref={wrapperRef}
      >
        <h3>{user.username}</h3>
        <ul onClick={toggleDropDown}>
          <li>
            <a
              title="logout"
              href="#0"
              // onClick={auth.Logout}
              className="logout_link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                className="svg icon replaced-svg"
              >
                <path
                  fill="#ADADAD"
                  d="M27.3271216,197.456002 C27.3271216,197.756676 27.0833777,198.000419 26.7827045,198.000419 L22,198.000419 L22,182 L26.7827045,182 C27.0833777,182 27.3271216,182.243744 27.3271216,182.544417 C27.3271216,182.84509 27.0833777,183.088834 26.7827045,183.088834 L23.0888343,183.088834 L23.0888343,196.911585 L26.7827045,196.911585 C27.0833777,196.911585 27.3271216,197.155329 27.3271216,197.456002 Z M34.0996706,190.337748 L34.077894,190.370413 L30.6045127,194.116003 C30.3977539,194.324772 30.0626366,194.331809 29.8472966,194.131903 C29.6319566,193.931997 29.6140969,193.597282 29.8069416,193.375596 L32.4310321,190.544627 L26.2546198,190.544627 C25.9539466,190.544627 25.7102027,190.300883 25.7102027,190.00021 C25.7102027,189.699536 25.9539466,189.455793 26.2546198,189.455793 L32.4310321,189.455793 L29.8069416,186.624823 C29.6671227,186.483645 29.6153225,186.277506 29.6717938,186.087002 C29.728265,185.896498 29.8840376,185.75189 30.0782078,185.709717 C30.2723781,185.667543 30.474103,185.734503 30.6045127,185.884416 L34.0724498,189.630006 L34.0996706,189.665393 L34.1296136,189.708947 C34.1395225,189.724801 34.1486082,189.741155 34.1568344,189.757944 C34.1650007,189.774277 34.1786111,189.787887 34.1786111,189.801497 C34.1861105,189.821076 34.1924726,189.841071 34.1976657,189.861383 L34.1976657,189.902215 C34.2007778,189.935715 34.2007778,189.969431 34.1976657,190.002932 C34.2007778,190.036432 34.2007778,190.070149 34.1976657,190.103649 L34.1976657,190.14448 C34.1924726,190.164792 34.1861105,190.184788 34.1786111,190.204366 C34.173167,190.220699 34.1568344,190.234309 34.1568344,190.247919 C34.1486082,190.264709 34.1395225,190.281063 34.1296136,190.296917 L34.0996706,190.337748 Z"
                  transform="translate(-22 -182)"
                ></path>
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
 
    </Fragment>
  );
}

export default Sidebar;
