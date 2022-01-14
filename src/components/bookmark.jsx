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

const Bookmark = () => {
  const [checked, setChecked] = useLocalStorage({ checked: false, id: uuid() });
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked((previousState) => !previousState);
        }}
      />
    </div>
  );
};

export default Bookmark;
