
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
    faYoutube,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  <FontAwesomeIcon icon="fas faChevron-up" />

export default function SocialFollow() {
  return (
    <div className="footer__content footer__social_icons">
      <a href="/"
      className="facebook footer__social bx">
      <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="/"
      className="linkedin footer__social bx">
      <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      <a href="/" className="twitter footer__social bx">
      <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="/"
      className="youtube footer__social bx">
      <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="/"
      className="instagram footer__social bx">
      <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
}