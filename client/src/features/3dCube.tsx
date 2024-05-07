import "../components/style.css";
export const Three_D_Cube = () => {
  return (
    <div className="container">
      <div id="cube">
        <div className="side" id="front">
          Front
        </div>
        <div className="side" id="back">
          Back
        </div>
        <div className="side" id="left">
          Left
        </div>
        <div className="side" id="right">
          Right
        </div>
        <div className="side" id="top">
          Top
        </div>
        <div className="side" id="bottom">
          Bottom
        </div>
      </div>
      {/* <button className="mt-[150px] ml-[150px] border p-[10px]">click me </button> */}
    </div>
  );
};
