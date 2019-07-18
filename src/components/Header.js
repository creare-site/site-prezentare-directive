import React from 'react';
import config from '../../config';
export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-paper-plane-o"></span>
      <h1>{config.heading}</h1>
      <p>
        {config.subHeading} - <a href="https://websitemarket.ro/?ref=site-directive">Comanda Site</a>
      </p>
    </div>
  );
}
