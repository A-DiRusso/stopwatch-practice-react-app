import React from 'react';
import { removePropertiesDeep } from '@babel/types';

function ElapsedTime(props) {
  return (
    <div>ElapsedTime: {props.sessionElapsedTime}
      <br/>
      {props.hours}:{props.minutes}:{props.seconds}
    </div>
  )
}

export default ElapsedTime;