import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const style = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "12px 16px",
    fontSize: "20px",
    backgroundColor: hover ? "#228B22" : "#228B22", // same color for both normal and hover states
    color: "#fff",
    borderRadius: "0", // square shape
    border: "2px solid #228B22", // border color to match the background
    cursor: "pointer",
    display: visible ? "block" : "none",
    zIndex: 1000,
    transition: "background-color 0.2s ease, border-color 0.2s ease", // added transition for border color
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
