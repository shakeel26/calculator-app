import React, {useState } from 'react';


const App = () => {

  const [input, setInput] = useState("");
  const calButtons = [];
  [1,2,3,4,5,6,7,8,9,0,".", "%"].forEach((item) => {
    calButtons.push(
      <button
        onClick={(e) => {
          updateInput(input,e);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  const updateInput = (input,e) => {
    setInput(input + e.target.value);
  }


  return (
    <div className="wrapper">
      <div className="show-input">{input}</div>
      <div className="digits flex">{calButtons}</div>
      <div className="modifiers subgrid">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Clear
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
      <div className="operations subgrid">
        {/* add button */}
        <button onClick={(e) => updateInput(input,e)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={(e) => updateInput(input,e)} value="-">
          
          -
        </button>

        <button onClick={(e) => updateInput(input,e)} value="*">
          
          *
        </button>

        <button onClick={(e) => updateInput(input,e)} value="/">
          
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={(e) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(2))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
