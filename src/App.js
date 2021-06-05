import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(pet, { name: "peppers", animal: "bird", breed: "xyz" }),
//     React.createElement(pet, {
//       name: "luna",
//       animal: "dog",
//       breed: "havanese",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
