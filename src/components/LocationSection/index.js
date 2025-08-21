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
              <h2 className="main-font">Той болуучу жай</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>“ҮЧ СУЛТАН” рестораны</strong>
                </a>{' '}
                <br />
                Токтогул шаары, Кыргызстан
                <br />
                <time> 18:00 - 23:59</time>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2970.58981562254!2d72.93615407608469!3d41.88017087124149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDUyJzQ4LjYiTiA3MsKwNTYnMTkuNCJF!5e0!3m2!1sru!2skg!4v1755766617966!5m2!1sru!2skg"
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
                    href="https://go.2gis.com/GCt2x"
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
                    href="https://maps.app.goo.gl/vw5xsCZYnHp8utuy5"
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
