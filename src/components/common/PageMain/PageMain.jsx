import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PageTitle from '../PageTitle/PageTitle';

const PageMain = React.memo(
  ({
    title,
    description,
    pageTitle,
    pageSub = '',
    capitalizeTitle = false,
    offwhite = false,
    pageClassName,
    children,
  }) => (
    <>
      <Helmet>
        {title && <title> {title} </title>}
        {description && <meta name="description" content={description} />}
      </Helmet>
      <main className={`page ${pageClassName} ${offwhite ? 'off-white' : ''}`}>
        {pageTitle && (
          <PageTitle
            title={pageTitle}
            sub={pageSub}
            capitalize={capitalizeTitle}
          />
        )}
        {children}
      </main>
    </>
  )
);

PageMain.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  pageTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  capitalizeTitle: PropTypes.bool,
  offwhite: PropTypes.bool,
  pageClassName: PropTypes.string,
};

export default PageMain;
