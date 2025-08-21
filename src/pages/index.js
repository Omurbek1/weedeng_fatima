import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import LocationSection from '@components/LocationSection';
import StorySection from '@components/StorySection';
import PhotoSection from '@components/PhotoSection/Loadable';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
  const loc = typeof window !== 'undefined' ? window.location : null;

  const guestName = decodeURIComponent(getQueryValue(loc, 'to') || '');
  const isInvitation = getQueryValue(loc, 'type') === 'invitation';
  const isAnonymGuest = guestName === '' && !isInvitation;
  const codeLink = getQueryValue(loc, 'code') || '';

  const [showDetailContent, setShowDetailContent] = useState(false);

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    if (!showDetailContent) return null;

    return (
      <Fragment>
        <HelloSection isInvitation={isInvitation} />
        <StorySection />
        <PhotoSection />

        {!isInvitation && <LocationSection />}
        <FooterSection isInvitation={isInvitation} />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        isInvitation={isInvitation}
        location={location}
        codeLink={() => {}}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
