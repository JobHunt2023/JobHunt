import React from 'react'

export const Users = () => {
    return (
      <>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="100" height="100" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_250_241" transform="scale(0.01)" />
            </pattern>
            <image
              id="image0_250_241"
              width="100"
              height="100"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </>
    );
  };
