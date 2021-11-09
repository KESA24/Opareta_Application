const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: "#21ce99" }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
