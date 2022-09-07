import React from 'react';

export const ClickHandler = () => {
  const ClickHandler1 = (gs, ab = 'g0s') => {
    console.log(gs, ab);
  };

  // const ClickHandler2=(a)=>{
  //   console.log(a);
  //}
  return (
    <div>
      <button onClick={() => ClickHandler1('Ghanshyam')}>Click 1</button>
      <h1> </h1>
      <h1> </h1>
      <button onClick={() => ClickHandler1('Goal!', 5)}>Click 2</button>
      <h1> </h1>
      <button onClick={() => ClickHandler1("gs","pa")}>click 3</button>
    </div>
  );
};

// const shoot = (a) => {
//   alert(a);
// }

// return (
//   <button onClick={() => shoot("Goal!")}>Take the shot!</button>
// );
// }
