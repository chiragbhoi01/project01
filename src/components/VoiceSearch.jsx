import React, { useState, useEffect } from "react";

export default function VoiceSearch({ onSearch }) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  let recognition = null;

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition");
      return;
    }
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
      onSearch(speechToText);
      setListening(false);
    };

    recognition.onerror = (event) => {
      setListening(false);
    };

    return () => {
      if (recognition) recognition.stop();
    };
  }, [onSearch]);

  const toggleListening = () => {
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={toggleListening} style={{ padding: 10 }}>
        {listening ? "🎙️ Listening..." : "🎤 Speak to Search"}
      </button>
      <p>Search Query: {transcript}</p>
    </div>
  );
}