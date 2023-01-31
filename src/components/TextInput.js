import { Input } from "./common";

export default function TextInput({ value, onChange, label, ...props }) {
  return (
    <>
    <label>{label}</label>
    <Input
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
    </>
  );
}
