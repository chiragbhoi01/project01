import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export default function VoiceSearch({ onSearch, placeholder = "Speak to search..." }) {
  const [listening, setListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(""); // State to hold the search query

  let recognition;

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setIsSupported(false);
      return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setQuery(speechToText); // Update the query state
      onSearch(speechToText); // Trigger the parent search function
      setListening(false);
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  }, [onSearch]);

  const toggleListening = useCallback(() => {
    if (!isSupported) return;

    setError(null);
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  }, [isSupported, listening]);

  return (
    <div className="flex flex-col items-center mt-5">
      {isSupported ? (
        <>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Allow manual edits
              placeholder={placeholder}
              className="border rounded-lg p-2 flex-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={toggleListening}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 ${
                listening ? "bg-red-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {listening ? "🎙️ Listening..." : "🎤 Speak"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </>
      ) : (
        <p className="text-red-500 text-sm">Speech recognition is not supported in your browser.</p>
      )}
    </div>
  );
}

VoiceSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
