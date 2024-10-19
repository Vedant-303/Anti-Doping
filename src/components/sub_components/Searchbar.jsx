import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// import './Searchbar.css'



const SearchBar = ({style = "fixed"}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // Implement your search logic here
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleInputChange}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          handleSearch();
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment  position="start" >
            <SearchIcon />
          </InputAdornment>
        ),
        style: {
            borderRadius: "30px", 
            height:'45px' ,
        },
      }}
      style={{ width: "20vw",height:'45px' ,borderRadius: "30px" , border:'1px solid black' , right:'15px' , top:'10px', ...style}}
    />
  );
};

export default SearchBar;
