import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";

import TimelineItem from "./TimelineItem";
import PlaceholderTimeline from "./PlaceholderTimeline";

const Timeline = ({ startDate, showPlaceholder }) => {
  if (showPlaceholder) {
    return <PlaceholderTimeline />;
  }
  let first = true;
  const items = schedule.map(s => {
    const itemDate = moment(startDate).subtract(s.offset, "days");
    const elem = (
      <TimelineItem
        key={s.title + itemDate.format("YYYY-MM-DD")}
        expand={first && itemDate.isAfter(moment())}
        startDate={itemDate}
        title={s.title}
        icon={s.icon}
        body={s.body}
      />
    );
    if (itemDate.isAfter(moment())) {
      first = false;
    }
    return elem;
  });
  return (
    <React.Fragment>
      <h3 className="mb-3">Timeline</h3>
      {items}
    </React.Fragment>
  );
};

Timeline.propTypes = {
  startDate: momentPropTypes.momentObj,
  showPlaceholder: PropTypes.bool
};

export default Timeline;

const schedule = [
  {
    offset: 180,
    title: "Make your dining reservations",
    icon: "cutlery",
    body: (
      <React.Fragment>
        <p>
          At 180 days before your arrive, you can book your dining reservations. Popular restaurants
          such as the Be Our Guest Restaurant, Cinderella's Royal Table, and Chef Mickey's tend to
          book up fast. So, book sooner than later to secure your favorites.
        </p>
        <p>
          On an off-night, we recommend California Grill atop the Contemporary. Pick a
          time around the Magic Kingdom fireworks for a special treat.
        </p>
      </React.Fragment>
    )
  },
  {
    offset: 180,
    title: "Book special reservations",
    icon: "certificate",
    body: (
      <React.Fragment>
        <p>
          Also at 180 days before your arrive, you can book other special reservations. Most notably,
          these include the Bibbidi Bobbidi Boutique. Other special reservations include watercraft
          rental, spas, etc.
        </p>
      </React.Fragment>
    )
  },
  {
    offset: 60,
    title: "Select your FastPass+ reservations",
    icon: "ticket",
    body: (
      <React.Fragment>
        <p>
          FastPass+ reservations allow you to skip the standby line for attractions during certain time slots of the day.
          You can reserve up to three FastPass+ reservations for each day of your stay before your arrive. Once you've used
          all three, you can book one more. Each time you use your last FastPass+ reservation, you can book an additional
          one.
        </p>
        <p>
          Staying at a Walt Disney World Resort has its perks, starting at 60 days before your stay, you can select
          your first three FastPass+ reservations for each day of your stay. This gives your 30 days before non-resort
          guests giving you the prime selections.
        </p>
        <p>
          Sign into your <a
            href="https://disneyworld.disney.go.com/plan/bands-cards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Disney Experience account
          </a> and book your FastPass+ reservations. Be sure to check each daily
          itinerary of your trip for details and recommendations for selecting your FastPass+ reservations.
        </p>
      </React.Fragment>
    )
  },
  {
    offset: 45,
    title: "Customize your MagicBands",
    icon: "circle-thin",
    body: (
      <React.Fragment>
        <p>
          Another perk of staying on the grounds is receiving free, customized MagicBands for your stay. MagicBands are
          waterproof, rubber bracelets (or can be attached to carabiner if you don't like wrist wear) that can be used
          for park entry, FastPass+ returns, and as your hotel room key. Plus, you can associate a credit card and PIN
          to make purchases throughout the parks and Disney Springs.
        </p>
        <p>
          The best part is that 45 days before your trip, you can customize your MagicBand colors and names for free!
          Just sign into your
          <a
            href="https://disneyworld.disney.go.com/plan/bands-cards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Disney Experience account
          </a>
          . Once complete, Disney will ship your MagicBands to your home before you leave for your trip.
        </p>
      </React.Fragment>
    )
  },
  {
    offset: 45,
    title: "Reserve your spot on the Magical Express",
    icon: "bus",
    body: (
      <React.Fragment>
        <p>
          For guests at a Walt Disney World Resort hotel, you can use the complimentary transportation to and from the
          Oralando International Airport called Disney's Magical Express. Further, your checked luggage is delivered
          directly to your hotel room. No need to wait at baggage claim. Simply attach the luggage tags before checking
          your bags.
        </p>
        <p>
          Prior reservations are required for this service. If you didn't reserve your spot on the Magical Express when
          you booked your hotel reservations, call the reservation line at (407) 939-1936 today to book your space.
        </p>
        <p>
          <strong>Remember:</strong>
          {" "}
          Don't pack your MagicBands in your checked luggage as you'll need them to check-in
          to the Magical Express and to enter your hotel room.
        </p>
      </React.Fragment>
    )
  },
  {
    offset: 30,
    title: "Select your FastPass+ reservations",
    icon: "ticket",
    body: (
      <React.Fragment>
        <p>
          FastPass+ reservations allow you to skip the standby line for attractions during certain time slots of the day.
          You can reserve up to three FastPass+ reservations for each day of your stay before your arrive. Once you've used
          all three, you can book one more. Each time you use your last FastPass+ reservation, you can book an additional
          one.
        </p>
        <p>
          If you aren't staying at a Walt Disney World Resort hotel, you can book your first three FastPass+ reservations
          30 days before your arrive.
        </p>
        <p>
          Sign into your <a
            href="https://disneyworld.disney.go.com/plan/bands-cards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Disney Experience account
          </a> and book your FastPass+ reservations. Be sure to check each daily
          itinerary of your trip for details and recommendations for selecting your FastPass+ reservations.
        </p>
      </React.Fragment>
    )
  },
  {
    offset: 14,
    title: "Double check itinerary and park hours",
    icon: "calendar-check-o",
    body: <React.Fragment />
  },
  {
    offset: 0,
    title: "Arrive, check-in, and have fun!",
    icon: "map-marker",
    body: <React.Fragment />
  }
];
