const InputFeedback = ({ error }) =>
  error ? <div className={"asd"}>{error}</div> : null;

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children,
}) => {
  return (
    <div>
      
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      
    </div>
  );
};

export default RadioButtonGroup;
