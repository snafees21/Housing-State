const InputField = ({ field, form: { touched, errors }, ...props }) => {
  return <input {...field} {...props} />;
};

export default InputField;
