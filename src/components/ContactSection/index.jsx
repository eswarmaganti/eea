import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faYoutube,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Title } from "../utils";
const ContactSection = () => {
  return (
    <section className="contact-section  relative bg-slate-100" id="contact">
      <div className="grid grid-cols-2">
        <div className="h-[500px] pl-12 pt-5 pr-5">
          <Title title="Let's Connect." align="left" />
          <div className="contact-details">
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-rose-600"
                size="lg"
              />
              <span>rebba.emma@gmail.com</span>
            </div>
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-rose-600"
                size="lg"
              />
              <span>+91 9550012345</span>
            </div>
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-rose-600"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-rose-600"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-rose-600"
                size="lg"
              />
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.7253950961685!2d80.93892311437772!3d16.23455113929953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49fb70a52e42e1%3A0xc08c6b5dc2898c84!2sEMMANUEL%20EVANGELICAL%20ASSOCIATION!5e0!3m2!1sen!2sin!4v1668594425507!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
