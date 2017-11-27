import React from 'react';
import { string, number, shape } from 'prop-types';

const Details = ({
  timestamp,
  coord: { lat, lon },
  country,
  dt,
  name,
  ...props
}) => {
  const time = new Date(timestamp);
  const dtTime = new Date(dt);
  return (<p {...props}>Weather collected from station: {name}, {country}, latitude: {lat}, longitude: {lon}.
  Time requested <time dateTime={time}>{time.toLocaleString()}</time>.
  Timestamp recived from station <time dateTime={dt}>{dtTime.toLocaleString()}</time>
  </p>);
};

Details.propTypes = {
  timestamp: number.isRequired,
  dt: number.isRequired,
  coord: shape({
    lat: number.isRequired,
    lon: number.isRequired,
  }).isRequired,
  country: string.isRequired,
  name: string.isRequired,
};

export default Details;
