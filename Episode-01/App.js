const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hellow world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render tag converts the object to html
// React will overwrite everything inside "root" and replaces with whatever given inside render.

console.log(heading); // heading is a object
