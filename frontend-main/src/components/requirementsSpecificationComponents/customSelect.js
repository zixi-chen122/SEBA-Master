import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label} </label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error"> {meta.error} </div>
      ) : null}
    </>
  );
};

export default CustomSelect;
