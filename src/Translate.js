import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Kannada",
    value: "kn",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Telugu",
    value: "te",
  },
  {
    label: "Tamil",
    value: "ta",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[4]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label style={{marginTop: "10px"}}>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
<h3 className="ui header">Translated Text is:</h3>
<Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
