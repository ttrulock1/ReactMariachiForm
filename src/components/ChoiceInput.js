import { Select } from "./common";

export default function ChoiceInput({
  value,
  onChange,
  options = [],
  label,
  ...props
}) {
  return (
    <>
    <label>{label}</label>
    <Select value={value} onChange={(e) => onChange(e.target.value)} {...props}>
      <option value="">Please select your {label}</option>
      {options.map((option) => (
        <option>{option}</option>
      ))}
    </Select>
    </>
  );
}
