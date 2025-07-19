import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  const filteredList = useMemo(() => {
    if (!inputText.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]);

  useEffect(() => {
    filterList(filteredList);
  }, [filteredList, filterList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={handleInputChange}
          slotProps={{
            input: {
              maxLength: 100
            }
          }}
        />
        <Button
          id="searchBtn"
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}
