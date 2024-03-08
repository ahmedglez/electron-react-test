type CheckboxProps = {
  label: string;
  checked: boolean;
  handleCheckboxClick: React.MouseEventHandler<HTMLInputElement>;
};

export const Checkbox = ({
  label = "",
  checked,
  handleCheckboxClick,
}: CheckboxProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {label && (
        <label
          style={{
            color: "rgba(255,255,255,0.50)",
          }}
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium"
        >
          {label}
        </label>
      )}

      <input
        id="default-checkbox"
        type="checkbox"
        checked={checked}
        value=""
        className="w-4 h-4 text-white-600 bg-gray-600 border-gray-600 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checked:bg-gray-500 checked:border-transparent accent-black"
        onClick={handleCheckboxClick}
      />
    </div>
  );
};
