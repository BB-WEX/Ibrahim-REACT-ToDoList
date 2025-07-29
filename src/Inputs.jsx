const Input = ({ text, value, onChange, max}) => {
  return (
    <input type="text" placeholder={text} value={value} onChange={onChange} maxLength={max? max : "100"}/>
  );
};

export default Input;
