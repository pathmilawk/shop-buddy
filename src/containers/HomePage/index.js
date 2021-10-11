import React, { useState } from "react";
import SearchBox from "../../components/SearchBox";
import ProductCardGrid from "../../components/ProductCardGrid";

const HomePage = () => {

const [searchString, setSearchString] = useState("")

    const updateSearchString = (str) => {
        setSearchString(str);
    }
    
  return (
    <>
          <SearchBox updateSearchString={ updateSearchString }/>
          <ProductCardGrid searchString={ searchString }/>
    </>
  );
};

export default HomePage;
