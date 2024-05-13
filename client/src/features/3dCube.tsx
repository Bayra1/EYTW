import "../components/style.css";
export const Three_D_Cube = () => {
  return (
    <div className="container infin">
      <div id="cube">
        <div className="side" id="front">
          front
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
    </div>
  );
};
