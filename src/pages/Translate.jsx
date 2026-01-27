import React, { useEffect } from "react";

const Translate = () => {
  useEffect(() => {
    // Load Google Translate Script only once
    if (!window.googleTranslateLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
      window.googleTranslateLoaded = true;
    }

    // Google Translate Init
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    // Hide Google UI & banner
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate,
      #goog-gt-tt,
      .goog-te-menu-frame,
      .goog-te-balloon-frame,
      .goog-logo-link,
      .goog-te-gadget-icon,
      .goog-te-gadget {
        display: none !important;
      }
      body { top: 0px !important; }
      html { top: 0px !important; }
    `;
    document.head.appendChild(styleEl);

    // Observer to keep removing banner
    const hideTranslateElements = () => {
      document
        .querySelectorAll(
          ".goog-te-banner-frame, .goog-te-banner-frame.skiptranslate, #goog-gt-tt",
        )
        .forEach((el) => (el.style.display = "none"));
    };

    const observer = new MutationObserver(hideTranslateElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    hideTranslateElements();

    // Cleanup
    return () => {
      if (styleEl) document.head.removeChild(styleEl);
      observer.disconnect();
      delete window.googleTranslateElementInit;
    };
  }, []);

  // Change Language Function
  const changeLanguage = (lang) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div style={styles.page}>
      {/* Hidden Google Translate Container */}
      <div
        id="google_translate_element"
        style={{ opacity: 0, height: 0, overflow: "hidden" }}
      ></div>
    </div>
  );
};

const styles = {
  page: {
    // padding: "30px",
    fontFamily: "Arial",
  },
  // languageBox: {
  //   marginBottom: "20px",
  // },
  content: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default Translate;
