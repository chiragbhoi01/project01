import React, { useEffect, useState } from "react";

const mockSuggestions = [
  "Gold Necklace",
  "Diamond Ring",
  "Silver Bracelet",
  "Pearl Earrings",
];

export default function ProductSuggestion() {
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    // Simulate AI picking a suggestion (random)
    const pick = mockSuggestions[Math.floor(Math.random() * mockSuggestions.length)];
    setSuggestion(pick);
  }, []);

  return (
    <div style={{ marginTop: 20, padding: 10, border: "1px solid gray", borderRadius: 5 }}>
      <h3>Today's Special Suggestion</h3>
      <p><strong>{suggestion}</strong></p>
    </div>
  );
}