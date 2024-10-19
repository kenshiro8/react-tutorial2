import React, { useState } from "react"
import randomValueFromArray from "./components/Random"
import branchWeightUnit from "./components/Branch"
import branchTemperatureUnit from "./components/Branch"

export default function App() {
  const xItem = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItem = ["the soup kitchen", "Disneyland", "the White House"];
  const zItem = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  const [showStory, setshowStory] = useState(false);
  const [customName, setCustomName] = useState("");
  const [tempCustomName, setTempCustomName] = useState("");
  const [ukus, setUkus] = useState("us");

  const [xItem_num, setxItem_num] = useState(0);
  const [yItem_num, setyItem_num] = useState(0);
  const [zItem_num, setzItem_num] = useState(0);

  const generateRandomStory = () => {
    setxItem_num(randomValueFromArray(xItem));
    setyItem_num(randomValueFromArray(yItem));
    setzItem_num(randomValueFromArray(zItem));
    setshowStory(true);
    setCustomName(tempCustomName);
  }

  const handleCustomName = (e) => {
    setTempCustomName(e.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" 
        placeholder="" 
        value={tempCustomName} 
        onChange={handleCustomName}/>
      </div>

      <div>
        <label htmlFor="us">US</label>
        <input type="radio" 
        value="us" 
        checked={ukus === "us"}  
        onChange={() => setUkus("us")}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" 
        value="uk" 
        checked={ukus === "uk"} 
        onChange={() => setUkus("uk")}/>
      </div>

      <div>
        <button onClick={generateRandomStory}>Generate random story</button>
      </div>

      {showStory && (
        <p>
          It was 94 { branchTemperatureUnit(ukus) } outside, so {xItem[xItem_num]} went for a walk. When they
          got to {yItem[yItem_num]}, they stared in horror for a few moments, then {zItem[zItem_num]}.
          {" "}{customName ? customName : "Bob"} saw the whole thing, but was not surprised — {xItem[xItem_num]} weighs 300
          {branchWeightUnit(ukus) }, and it was a hot day.
        </p>
      )}
    </>
  );
}