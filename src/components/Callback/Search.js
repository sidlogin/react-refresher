import { TextField } from "@mui/material";
import { memo, useEffect, useState } from "react";

function Search({ onSearch, term }) {
    const [inputValue, setInputValue] = useState('')
    const [debouncedInputValue, setDebouncedValue] = useState("");
  
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setDebouncedValue(inputValue);
        onSearch(debouncedInputValue);
      }, 100);
      return () => {
        clearTimeout(timeoutId);
      }
  }, [inputValue, debouncedInputValue, onSearch]);

  return (
    <>
      <TextField
        label="Saerch"
        autoComplete="off"
        variant="outlined"
        value={term}
        onChange={handleInputChange}
      />
    </>
  );
}

export default memo(Search);
