import React from 'react';
export const Greet = (props) => {
  return (
    <div>
      <h1>
        Welcome To {props.name} in {props.company}
      </h1>
      <h2>{props.children}</h2>
    </div>
  );
};
