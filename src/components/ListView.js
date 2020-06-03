import React, { useState, useEffect } from "react";
import Pokedex from "./Pokedex";
import "../css/listViewStyles.css";

// used one level of abstraction here just in case I wanted to add anything else later. I didn't but it seems useful if I want to add onto this project in the future

function ListView() {
  return (
    <body>
      <Pokedex></Pokedex>
    </body>
  );
}

export default ListView;
