"use client";

import { RadioGroup as HeadlessRadioGroup, Radio } from "@headlessui/react";
import { CheckmarkCircleIcon } from "@sanity/icons";

export type RadioGroupOption = {
  value: string;
  label: string;
};

export type RadioGroupProps = {
  options: RadioGroupOption[];
  value?: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
};

export function RadioGroup({
  options,
  name,
  value,
  label,
  onChange,
  ...rest
}: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <label className="text-sm font-semibold mb-2 text-center md:text-left">
        {label}
      </label>
      <HeadlessRadioGroup
        {...rest}
        value={value}
        onChange={onChange}
        aria-label={label}
        name={name}
        className="flex flex-col gap-2"
      >
        {options.map((option) => {
          return (
            <Radio
              key={option.value}
              value={option.value}
              className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-primary"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{option.label}</p>
                </div>
                <CheckmarkCircleIcon className="size-8 opacity-0 transition group-data-[checked]:opacity-100" />
              </div>
            </Radio>
          );
        })}
      </HeadlessRadioGroup>
    </fieldset>
  );
}
