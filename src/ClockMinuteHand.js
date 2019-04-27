import React from 'react'

function ClockMinuteHand(props) {
    const secDeg = props.minutes * 6; //minutes * 6 will give you rotational degrees
    const styles = {
        transform: `rotate(${secDeg}deg)`
    };

  return (
    <div className="bar-m" style={styles}></div>
  )
}

export default ClockMinuteHand;
