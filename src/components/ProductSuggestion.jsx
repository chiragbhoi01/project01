import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

export default function ProductSuggestion({ title = "Today's Special Suggestion", products }) {
  const [suggestion, setSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const pickSuggestion = useCallback(() => {
    if (!products || products.length === 0) {
      setSuggestion("No products available for suggestion.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setFade(false);

    setTimeout(() => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      setSuggestion(randomProduct.name);
      setIsLoading(false);
      setFade(true);
    }, 500);
  }, [products]);

  useEffect(() => {
    pickSuggestion();
  }, [pickSuggestion]);

  return (
    <div className="mt-5 p-4 border border-gray-200 rounded-lg shadow-sm bg-white max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button
          onClick={pickSuggestion}
          className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Refresh"}
        </button>
      </div>
      {isLoading ? (
        <p className="text-gray-500 italic">Fetching suggestion...</p>
      ) : (
        <p
          className={`text-gray-700 font-medium transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {suggestion}
        </p>
      )}
    </div>
  );
}

ProductSuggestion.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};
