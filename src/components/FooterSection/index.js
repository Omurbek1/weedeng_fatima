import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import mbank from '@assets/images/mbank.jpg';
import alipay from '@assets/images/alipay.jpg';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <a href="https://www.instagram.com/mamytbekov_o/">Developed by Mamytbekov Omurbek</a>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
