import React, { Fragment } from 'react';

function StorySection() {
  // const renderStories = () => {
  //   return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
  // };

  return (
    <Fragment>
      <div id="fh5co-couple-story">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Story</h2>
              <p className="sub-title">
                It's amazing to see how sometimes things that we ignore come into our lives. We were both people who
                didn't really believe that a relationship could start online. But somehow, through that, we got to know
                each other, became a little closer, and then fell in love with each other, and when we met face to face,
                we met in an atmosphere full of excitement and love. The difficulty was that we couldn't see each other
                whenever we wanted, but we think it made us want to see each other more and made us more valuable people
                to each other. But our relationship that started like that was filled with love and respect, and we
                ended up getting married. We are sending you this invitation in the hope that you will come to our party
                filled with excitement, love, happiness, and anticipation. Thank you for always being by our side, and
                we would be so happy if you shared our happiness with us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default StorySection;
