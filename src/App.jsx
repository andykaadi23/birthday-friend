import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(data);
  return <h2>Birthday Reminder - Starter</h2>;
};
export default App;
