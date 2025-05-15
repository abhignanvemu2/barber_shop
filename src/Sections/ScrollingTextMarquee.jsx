// components/ScrollingTextMarquee.jsx
import React from 'react';

export function ScrollingTextMarquee(props) {
  const {reverse} = props;
  return (
    <div className="w-full overflow-hidden  py-3">
      <div className="marquee-track">
        <div className="marquee-content  font-extrabold capitalize whitespace-nowrap text-6xl md:text-9xl big-shoulders text-primary">
          <span>
            PREMIUM SERVICE • PROFESSIONAL STAFF • BEST IN TOWN • PREMIUM SERVICE • PROFESSIONAL STAFF • BEST IN TOWN • PREMIUM SERVICE • PROFESSIONAL STAFF • BEST IN TOWN • 
          </span>
        </div>
      </div>
      {reverse && <div className="marquee-track">
        <div className="marquee-content-reverse font-extrabold capitalize whitespace-nowrap text-6xl md:text-9xl big-shoulders text-primary">
          <span>
            PREMIUM SERVICE • PROFESSIONAL STAFF • BEST IN TOWN • PREMIUM SERVICE • PROFESSIONAL STAFF • BEST IN TOWN • PREMIUM SERVICE • PROFESSIONAL STAFF • BEST IN TOWN • 
          </span>
        </div>
      </div>}
    </div>
  );
}
