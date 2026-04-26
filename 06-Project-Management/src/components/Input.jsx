import React, { forwardRef } from "react";

const Input = forwardRef(function Input({
  isTextarea,
  label,
  isDateType,
  ...props
} , ref) {
  const styleClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextarea ? (
        <textarea ref={ref} {...props} className={styleClasses} />
      ) : (
        <input ref={ref}
          {...props}
          className={styleClasses}
        />
      )}
    </p>
  );
});

export default Input;
