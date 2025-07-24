const Input = ({ text, value, onChange }) => {
  return (
    <input type="text" placeholder={text} value={value} onChange={onChange} />
  );
};

export default Input;
