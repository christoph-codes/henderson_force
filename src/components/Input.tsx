import { ChangeEvent, InputHTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

export interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validate?: (value: string) => string | undefined;
  error?: string;
}

export function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  validate,
  error,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <fieldset className="flex flex-col">
      <label htmlFor={name} className="text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={validate ? (e) => validate(e.target.value) : undefined}
        className={twJoin(
          "bg-gray border border-gray-300 rounded-md p-2 text-white focus:border-primary focus:ring-primary focus:ring-1 outline-none placeholder:text-gray-300 ",
          value.length > 0 &&
            "valid:border-green-400 valid:ring-green-400 valid:ring-1",
        )}
      />
      {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
    </fieldset>
  );
}
