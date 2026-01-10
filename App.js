const heading = React.createElement("h1", { id: "heading" }, "Hariharan");
const heading2 = React.createElement("h2", { id: "heading2" }, "Heading 2 tag");
const child = React.createElement("div", { id: "child" }, [heading, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
