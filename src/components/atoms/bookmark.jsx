import React, { useState, useEffect } from "react";

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
