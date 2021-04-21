// Original: https://tympanus.net/codrops/2017/03/15/stack-motion-hover-effects/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import "./styles.css";

function Stack({ image, background }) {
  console.log("hello is this working?");
  const [open, setOpen] = useState(false);
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 });
  const cards = useSprings(
    5,
    [0, 1, 2, 3, 4].map((i) => ({
      opacity: 0.2 + i / 5,
      z: open ? (i / 5) * 80 : 0
    }))
  );
  return (
    <div
      className="container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity,
            background,
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            )
          }}
        >
          {index === 4 && (
            <animated.img
              style={{
                transform: f.interpolate([0, 1], ["scale(0.7)", "scale(1)"])
              }}
              src={image}
            />
          )}
        </animated.div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <a href="index2.html"><Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png"
        background="#52649e"/></a>

      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png"
        background="#f7f295"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png"
        background="#ee7074"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png"
        background="#ee7074"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png"
        background="#52649e"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png"
        background="#f7f295"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/T0hA-3.png"
        background="#f7f295"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/QoXU-2.png"
        background="#ee7074"/>
      <Stack image="https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/9qWx-1.png"
        background="#52649e"/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
