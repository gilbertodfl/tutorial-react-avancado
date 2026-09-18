import React from "react";

export function InputField({ label, type, autoComplete, name, error,register }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        autoComplete={autoComplete}
        {...register(name)}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
