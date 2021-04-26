// Original: https://tympanus.net/codrops/2017/03/15/stack-motion-hover-effects/
import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { useSpring, useSprings, animated, interpolate } from "react-spring";
import "./styles.css";


//stacking function//
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



//All of content (except for the glitch button) is loacted within the App class
class App extends Component {

  //This establishes the variables and bindings used.
  constructor(props) {
    super(props);
    //This establishes the variable used to change the page content
    this.state = { value: 1 };
    //These create bindings for calling the page up and down functions with in the render loop
    this.pageUp = this.pageUp.bind(this);
    this.pageDown = this.pageDown.bind(this);
  }
//Page Up Function, increases "value" by 1
  pageUp() {
    console.log("test!");
    this.setState({
      value: this.state.value + 1
    });
    console.log(this.state.value);
  }

  //Page Down Function, decreases "value" by 1
  pageDown() {
    this.setState({
      value: this.state.value - 1
    });
  }
  //Render Loop, handles display of the above content
   render() {
     //Check for current value and display corresponding page.
     //Within each if statement, the corresponding function is called from above.
     if (this.state.value === 1) {
       return (
         <div className="App">
           <this.pageHome />
           <div className="App-Footer">
            <button onClick={this.pageUp}>Go To Next Page</button>
           </div>
         </div>
       );
       console.log(this.state.value);
       console.log("hello is this rendering?");
     } else if (this.state.value === 2) {
       return (
         <div className="App">
           <this.pageTwo />
           <div className="App-Footer">
             <button onClick={this.pageUp}>Go To Next Page</button>
             <br></br>
             <button onClick={this.pageDown}>Go To Home Page</button>
           </div>
         </div>
       );
     } else if (this.state.value === 3) {
       return (
         <div className="App">
           <this.pageThree />
           <div className="App-Footer">
             <button onClick={this.pageDown}>Go To Previous Page</button>
           </div>
         </div>
       );
     }
   }
 }


  //Exports all content to the html page.
  export default App;


//how to apply StackedSquares function within the App Class????

function StackedSquares() {
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

ReactDOM.render(<StackedSquares />, <App />, document.getElementById("root"));
