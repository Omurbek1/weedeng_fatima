import React, { Fragment } from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px' }}>
            {`ACARA ${finalText} BERLANGSUNG!`}
          </div>
        </div>
        <ButtonLive />
      </>
    );

  return (
    <Fragment>
      <div className="col-md-12" css={styMargin('0 0 16px 0')}>
        <CountItem text="Days" number={days} />
        <CountItem text="Hours" number={hours} />
        <CountItem text="Minutes" number={minutes} />
        <CountItem text="Seconds" number={seconds} />
      </div>
      <button>
        {/* save to google calendar 2024-08-15 17:00 Omurber and Zarina wedding day 5pm - 11pm */}
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Omurbek_Mamytbekov_Wedding_Party&dates=20240815T110000Z/20240815T170000Z&details=Omurber%20and%20Zarina%20wedding%20day%2005pm%20to%2011pm&location=HARRIS%20Hotel%20Sentraland%20Semarang"
          target="_blank"
          rel="noreferrer"
        >
          Save to Google Calendar
        </a>
      </button>
      {/* add save to data to google calendar */}
    </Fragment>
  );
}

export default CountContainer;
