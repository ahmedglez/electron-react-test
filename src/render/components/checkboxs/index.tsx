type CheckboxProps = {
  label: string;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({
  label = "",
  handleCheckboxChange,
}: CheckboxProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {label && (
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-white-600 bg-gray-600 border-gray-600 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-gray-500 checked:border-transparent accent-black"
        onChange={handleCheckboxChange}
      />
    </div>
  );
};
