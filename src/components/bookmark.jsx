import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const useLocalStorage = (key) => {
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem(key))
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const Bookmark = (props) => {
  const [checked, setChecked] = useLocalStorage(props.id, false);
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};

export default Bookmark;
