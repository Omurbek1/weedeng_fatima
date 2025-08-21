import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '../../assets/images/fatima/danil.jpg';
import Groom from '../../assets/images/fatima/fatima.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation
    ? '18:00, 25.08.2025, Токтогул шаары,“ҮЧ СУЛТАН” рестораны'
    : `18:00, 25.08.2025, Токтогул шаары, “ҮЧ СУЛТАН” рестораны`;

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Кымбаттуу коноктор!</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Биздин өмүр жолубуздагы өзгөчө жана маанилүү күн — үйлөнүү тоюбузга сиздерди чын жүрөктөн чакырабыз.
                Кубанычыбызды сиздер менен бөлүшүп, эстен кеткис көз ирмемдерди бирге жаратууну каалайбыз. Сиздин
                катышууңуз — биз үчүн чоң бакыт жана бул күндү дагы да өзгөчө кылат. Жакшы тилек, ак баталарыңыз,
                көӊүлдүү маанайыңыз – биз үчүн эң кымбат белек болот.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Фатима </h3>
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
                <h3 className="main-font">Данил</h3>
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
