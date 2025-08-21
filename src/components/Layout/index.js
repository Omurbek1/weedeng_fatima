import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/slide-5.jpg';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `../../assets/images/bg-welcome.jpg`;
const META_DESCRIPTION = `Danil ❤️ Fatima - The weddings of Danil & Fatima`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Danil ❤️ Fatima Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Danil & Fatima" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:site_name" content="The Wedding of Danil & Fatima" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="The Wedding of Danil & Fatima" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
