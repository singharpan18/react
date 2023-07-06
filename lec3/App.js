import React from "react";
import  ReactDOM  from "react-dom/client";

//React.createElement => it creates object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  {id: "heading"},
  "Namaste React"
);
console.log(heading);

//JSX - HTML-like or XML-like syntax
//JSX -> transpiled before it reaches the JS -> Parcel ->Babel
//JSX -> babel transpiles it to React.createElement -> ReactElement-JS Object -> htmlElement(render)
const JsxHeading = (
  <h1  className="head">
    Namaste JXS HEADING
  </h1>
);    
console.log(JsxHeading);

//React Functional Component & component composition
const HeadingComponent1 = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const HeadingComponent2 = () => (
  <div id="container">
    <HeadingComponent1/>
    {20+30}
    {JsxHeading}
    <h2>{console.log("arpan")}</h2>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

//malicious api
//const data = api.getData();

const HeadingComponent3 = () => (
  <div id="container">
    <HeadingComponent1/>
    {data}
    <h1 className="heading">Malacious API</h1>
  </div>
);

//React Fragment -> behaves like an empty tag
const HeadingComponent4 = () => (
  <React.Fragment>
    <div id="container">
      <HeadingComponent1/>
      <h1 className="heading">Malacious API</h1>
    </div>
    <div className="container"></div>
  </React.Fragment>
);
const HeadingComponent5 = () => (
  <>
    <div id="container">
      <HeadingComponent1/>
      <h1 className="heading">Malacious API</h1>
    </div>
    <div className="container"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JsxHeading);

//render functional component
root.render(<HeadingComponent2/>)

root.render(<HeadingComponent3/>)

root.render(<HeadingComponent5/>);