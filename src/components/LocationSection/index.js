import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Event Location</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Restaurant Altyn Arashan</strong>
                </a>{' '}
                <br />
                ​Улица 7 апреля, 7/2, Бишкек, Кыргызстан
                <br />
                <time> 17:00 - 23:59</time>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.403420295044!2d74.63273107663791!3d42.84321420443977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb70c97fef4ed%3A0xcc0dd658592e5d77!2z0JHQsNC90LrQtdGC0L3Ri9C5INC30LDQuyAi0JDQu9GC0YvQvSDQkNGA0LDRiNCw0L0i!5e0!3m2!1sru!2skg!4v1720610062499!5m2!1sru!2skg"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Dinda & Indra Wedding Party"
              ></iframe>
              <div className="text-center" style={{ marginTop: '20px' }}>
                <button className="btn btn-primary #fff">
                  {/* save to google calendar 2024-08-15 17:00 Omurber and Zarina wedding day 5pm - 11pm */}
                  <a
                    href="https://go.2gis.com/so7ro"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: '#fff',
                    }}
                  >
                    Open by 2Gis
                  </a>
                </button>
                <button className="btn btn-primary #fff">
                  {/* save to google calendar 2024-08-15 17:00 Omurber and Zarina wedding day 5pm - 11pm */}
                  <a
                    style={{
                      color: '#fff',
                    }}
                    href="https://maps.app.goo.gl/yQvVP52qYB7fVnrU6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open by Google Maps
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
