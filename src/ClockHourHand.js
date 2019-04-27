import React from 'react'

function ClockHourHand(props) {
    const secDeg = props.hours * 6 // this gives you the rotational degree
    const styles = {
        transform: `rotate(${secDeg}deg)`
    }
  return (
    <div className={"bar-h"} style={styles}></div>
  )
}

export default ClockHourHand;