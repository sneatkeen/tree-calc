import React from 'react';

const Content = ({
  children,
  maxwidth = '768px',
  contentDirection = 'row',
  contentAlign = 'center',
  contentJustify = 'start',
  breakAt = `${parseInt(maxwidth, 10) + 38}px`,
}) => (
  <div className="content-wrapper">
    {children}
    <style jsx>
      {`
        .content-wrapper {
          display: flex;
          flex-direction: ${contentDirection};
          justify-content: ${contentJustify};
          align-items: ${contentAlign === 'center' ? contentAlign : `flex-${contentAlign}`};
          width: 100%;
          height: 100%;
          max-width: ${maxwidth};
          margin: 0 auto;
        }

        @media screen and (max-width: ${parseInt(maxwidth, 10) + 38}px) {
          padding: 0 1em;
        }

        @media screen and (max-width: ${parseInt(breakAt, 10)}px) {
          flex-direction: column!important;
        }
      `}
    </style>
  </div>
);

export default Content;
