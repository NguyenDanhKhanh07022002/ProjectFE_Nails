import "./ScrollToTopButton.scss";
function ScrollToTopButton(props) {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="scroll-to-top-btn" onClick={handleScrollTop}></div>
    </>
  );
}

export default ScrollToTopButton;
