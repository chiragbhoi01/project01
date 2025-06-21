import React, { useState } from "react";
import Auth from "./components/Auth";
import ProductSuggestion from "./components/ProductSuggestion";
import VoiceSearch from "./components/VoiceSearch";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (text) => {
    setQuery(text);
    // You can add product filtering logic here based on `text`
    console.log("Searching for: ", text);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Jewellery E-commerce CloudCraft 2025</h1>
      <Auth />
      <ProductSuggestion />
      <VoiceSearch onSearch={handleSearch} />
      <h2>Search Results for: {query}</h2>
      {/* Show filtered product list based on search query */}
    </div>
  );
}

export default App;