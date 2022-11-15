import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./index.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../../utils";

const worshipTimelineData = [
  {
    name: "Sunday Worship Service",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem optio veniam?",
    details: {
      location: "Kondavaram",
      isOnline: false,
      time: "11 am",
    },
  },
  {
    name: "Wednsday Prayer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem optio veniam?",
    details: {
      location: "Kondavaram",
      isOnline: true,
      time: "8:00 pm",
    },
  },
  {
    name: "Friday Prayer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem optio veniam?",
    details: {
      location: "Kondavaram",
      isOnline: true,
      time: "8:00 pm",
    },
  },
  {
    name: "Saturday Prayer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto autem optio veniam?",
    details: {
      location: "Kondavaram",
      isOnline: true,
      time: "8:00 pm",
    },
  },
];

const WorshipServices = () => {
  return (
    <section className="my-4">
      <Title title="Worship Services" />
      <div className="worship-timeline-container">
        {worshipTimelineData.map((item) => (
          <TimelineItem item={item} />
        ))}
      </div>
    </section>
  );
};

const TimelineItem = ({ item }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3 className="timeline-title">{item.name}</h3>
        <p className="text-xs my-3">{item.desc}</p>
        <div className="details ">
          <div className="detail-item">
            <FontAwesomeIcon icon={faClock} />
            <span>{item.details.time}</span>
          </div>
          <div className="detail-item">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              {item.details.location}
              {item.details.isOnline && " & zoom"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorshipServices;
