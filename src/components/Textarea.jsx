import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;

    // basic validation to prevent XSS attacks
    if (newText.includes("<script>")) {
      setWarningText('No script tag allowed!');
      newText = newText.replace("<script>", "");
    } 
    else if (newText.includes("@")) {
      setWarningText('No @ sign allowed!');
      newText = newText.replace("@", "");
    }
    else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Enter your message here..."
        spellCheck="false"
        onChange={handleChange}
        value={text}
      />
      <Warning warningText={warningText} />
    </div>
  );
}
