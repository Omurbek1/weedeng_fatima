import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import mbank from '@assets/images/mbank.jpg';
import alipay from '@assets/images/alipay.jpg';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
      {!isInvitation && (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <div className="event-wrap">
                  <h2 className="main-font">For cash and Gifts</h2>
                </div>

                <p className="info">
                  Having you with us on our special day is the best gifts we could ask for. Though should you wish to
                  help us keep the celebrations going, a cash gifts towards our honeymoon fund would be greatly
                  appreciated.
                </p>
              </div>
            </div>
            <div
              className="row "
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="col-md-8 col-md-offset-2 ">
                <b> Mamytbekov Omurbek(bridegroom):</b> <br />
                <div
                  className="animatedBorder"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: 'black',
                    padding: '10px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}
                >
                  <span> 🇰🇬 Mbank - 996776882271</span>
                  <span> 🇰🇬 Элкард - 9417608993188430</span>
                  <span>🇨🇳</span>
                  <div style={{ display: 'flex' }}>
                    <img src={mbank} alt="mbank" style={{ width: '35%' }} />
                    <img src={alipay} alt="mbank" style={{ width: '35%' }} />
                  </div>
                </div>
                <br />
              </div>
              <div className="col-md-8 col-md-offset-2 ">
                <b>Abdibaitova Zarina(bride):</b>
                <div
                  className="animatedBorder"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderColor: 'black',
                    padding: '10px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}
                >
                  <span> 🇰🇬 Mbank - 996558882271</span>
                  <span>🇰🇷 Hana bank - 50891047557807</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>Developed by Mamytbekov Omurbek</p>
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
