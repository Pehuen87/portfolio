import React, { useEffect } from 'react';
import './linkedInBadge.css'

export const LinkedInBadge = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
     <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="pehuen-assalone" data-version="v1">
       </div>
              
    </div>
  );
}