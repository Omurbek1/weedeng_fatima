import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/zarina.jpg';
import Groom from '@assets/images/omurbek.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation
    ? '  5:00pm  15 August 2024, a restaurant Altyn Arashan, Bishkek'
    : '17:00   15 August 2024, Altyn Arashan, Bishkek';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Hello every one</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                It is with great joy that we invite you to join us as we embark on this new, wonderful chapter of our
                journey together. May our hearts be filled with love, laughter, and precious memories, all shared with
                you! Your presence will transform this day into a true celebration of magic and leave an unforgettable
                mark in our hearts.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Zarina Abdibaitova</h3>
                <p className="parent-name parent-name__top">
                  Software Engineer <br />& Korean teacher
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Omurbek Mamytbekov</h3>
                <p className="parent-name">
                  Software Engineer <br />& Businessman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
