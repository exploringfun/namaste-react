/**
 * 
 * <div id = "parent">
 *  <div id="child">
 *      <h1> I am h1 tag</h1>
 *  </div>
 * 
 * </div>
 */


const parent = React.createElement(
    "div", {id: "parent"},
    React.createElement(
        "div", {id: "child"},
        React.createElement("h1",{ }, "I am h1 tag")
    )
);


const heading = React.createElement("h1", 
{ id :"heading", xyz:"abc"},
 "Hello World from React!");

 console.log(heading); //gives object as output
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
