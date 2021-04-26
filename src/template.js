import React, { Component } from "react";
// import logo from "./logo.svg";
// import logo2 from "./logo2.svg";
import "./template.css";

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

  //Home Page Content
  pageHome() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Home Page</h2>
        <div className="App-bodyText">
          <p>
            This example illustrates how to use buttons to change the content on
            the page while staying on index.html. In this case, the content has
            been organized into "pages" which are defined within "App.js".
            <br></br>
            <br></br>
            Edit at: <code>"./src/App.js"</code>
          </p>
        </div>
      </header>
    );
  }

  //Page 2 Content
  pageTwo() {
    return (
      <div className="App">
        <header className="App-header">
          <br></br>
          <br></br>
          <img src={logo2} className="App-logo2" alt="logo2" />
          <br></br>
          <br></br>
          <h2>Page 2</h2>
          <div className="App-bodyText">
            <p>
              A single variable names "value" is used to indicate the current
              page. The render() function uses <code>"if" and "else if"</code>{" "}
              statements to display the desired content.<br></br>
              <br></br>
              Edit at: <code>"./src/App.js"</code>
            </p>
          </div>
        </header>
      </div>
    );
  }

  //Page 3 Content
  pageThree() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo3" alt="logo3" />
          <h2>Page 3</h2>
          <div className="App-bodyText">
            <p>
              Functions named pageUp() and pageDown() modify the variable
              "value" and are triggered when the corresponding button is
              clicked.<br></br>
              <br></br>
              Edit at: <code>"./src/App.js"</code>
            </p>
          </div>
        </header>
      </div>
    );
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
