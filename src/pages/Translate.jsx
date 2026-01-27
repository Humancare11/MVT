import React, { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    if (!window.googleTranslateLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateLoaded = true;
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar,bn",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ opacity: 0, height: 0, pointerEvents: "none", position: "fixed" }}
    ></div>
  );
};

export default Translate;
