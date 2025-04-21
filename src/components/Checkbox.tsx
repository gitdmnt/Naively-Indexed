interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onChange(checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

