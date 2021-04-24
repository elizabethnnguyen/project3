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
                transform: f.interpolate([0, 1], ["scale(0.3)", "scale(0.3)"])
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
      <Stack image="https://i.ibb.co/D9c8PsZ/art.png" alt="art"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/2cKMDBz/games.png" alt="games"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/1KWGpth/watch.png" alt="watch"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/yhJXTSz/food.png" alt="food"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/zbBwT1p/memes.png" alt="memes"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/4JXQhbZ/music.png" alt="music"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/jbqSsyb/fashion.png" alt="fashion"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/JQ98MqR/plants.png" alt="plants"
        background="#ffffff"/>
      <Stack image="https://i.ibb.co/5MWVq55/environment.png" alt="environment"
        background="#ffffff"/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
