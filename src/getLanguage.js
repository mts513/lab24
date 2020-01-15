import React, { useState } from "react";

export const LanguageContext = React.createContext();

function GetLanguage(props) {
  const [state, setState] = useState({
    lang: "en",
    updateLanguage: e => {
      setState({ ...state, lang: e });
    }
  });

  return (
    <LanguageContext.Provider value={state}>
      <div>{props.children}</div>
    </LanguageContext.Provider>
  );
}

export default GetLanguage;
