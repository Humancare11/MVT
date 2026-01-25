import React, { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    // Create script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Google translate init function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,mr,ur,hi,fr,es", // English, Marathi, Urdu, Hindi, French, Spanish
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element",
      );
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Translator */}
      <div id="google_translate_element" style={styles.translator}></div>

      {/* Dummy Website Content */}
      <div style={styles.content}>
        <h1>Welcome to Our Website</h1>
        <p>
          This is a demo website where you can translate content into multiple
          languages.
        </p>

        <h2>About Us</h2>
        <p>
          We provide technology solutions including web development, AI, and
          cybersecurity services.
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>Machine Learning</li>
          <li>Cyber Security</li>
          <li>Cloud Computing</li>
        </ul>

        <h2>Contact</h2>
        <p>Email: info@example.com</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  translator: {
    marginBottom: "20px",
  },
  content: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
  },
};

export default Translate;
