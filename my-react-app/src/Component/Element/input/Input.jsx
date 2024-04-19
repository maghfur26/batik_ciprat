const Input = ({ type, htmlfor, children }) => {
  return (
    <>
      <label htmlFor={htmlfor} name={htmlfor} id={htmlfor}>{children}</label>
      <input type={type} />
    </>
  );
};

export default Input;
