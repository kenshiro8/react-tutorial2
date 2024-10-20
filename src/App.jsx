import React, { useState } from "react"
import randomValueFromArray from "./components/Random"
import {branchWeightUnit, branchTemperatureUnit} from "./components/Branch"

export default function App() {
  const xItem = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItem = ["the soup kitchen", "Disneyland", "the White House"];
  const zItem = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

  const [showStory, setShowStory] = useState(false);
  const [customName, setCustomName] = useState("");
  const [tempCustomName, setTempCustomName] = useState("");
  const [ukus, setUkus] = useState("us");
  const [tempUkus, setTempUkus] = useState("us");

  const [xItem_num, setxItem_num] = useState(0);
  const [yItem_num, setyItem_num] = useState(0);
  const [zItem_num, setzItem_num] = useState(0);

  const generateRandomStory = () => {
    setxItem_num(randomValueFromArray(xItem));
    setyItem_num(randomValueFromArray(yItem));
    setzItem_num(randomValueFromArray(zItem));
    setShowStory(true);
    setCustomName(tempCustomName);
    setUkus(tempUkus);
  }

  const handleCustomName = (e) => {
    setTempCustomName(e.target.value);
  }

  const handleUkusChange = (e) => {
    setTempUkus(e.target.value);
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
        checked={tempUkus === "us"}  
        onChange={handleUkusChange}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" 
        value="uk"  
        checked={tempUkus === "uk"} 
        onChange={handleUkusChange}/>
      </div>

      <div>
        <button onClick={generateRandomStory}>Generate random story</button>
      </div>

      {showStory && (
        <p>
          It was { branchTemperatureUnit(ukus) } outside, so {xItem[xItem_num]} went for a walk. When they
          got to {yItem[yItem_num]}, they stared in horror for a few moments,
          then {zItem[zItem_num]}. {customName ? customName : "Bob"} saw the whole thing,
          but was not surprised — {xItem[xItem_num]} weighs {branchWeightUnit(ukus) }, and it was a hot day.
        </p>
      )}
    </>
  );
}