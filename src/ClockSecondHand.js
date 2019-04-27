import React from 'react'

function ClockSecondHand(props) {
    const secDeg = props.seconds * 6; //seconds * 6 will give you the rotational degree
    const styles = {
        transform: `rotate(${secDeg}deg)`
    };

  return (
    <div className="bar-s secondhand" style={styles}></div>
  )
}

export default ClockSecondHand;