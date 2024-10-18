import randomValueFromArray from "./components/Random"

export default function App() {
  const showStory = false;
  const xItem = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
  const yItem = ["the soup kitchen", "Disneyland", "the White House"];
  const zItem = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
  const ukus = "us";
  let xItem_num = <randomValueFromArray/ >;
  let yItem_num = <randomValueFromArray/ >;
  let zItem_num = <randomValueFromArray/ >;

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" checked={ukus === "us"} />
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" checked={ukus === "uk"} />
      </div>
      <div>
        <button>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 fahrenheit outside, so {xItem[xItem_num]} went for a walk. When they
          got to {yItem[yItem_num]}, they stared in horror for a few moments, then {zItem[zItem_num]}.
          Bob saw the whole thing, but was not surprised — {xItem[xItem_num]} weighs 300
          pounds, and it was a hot day.
        </p>
      )}
    </>
  );
}