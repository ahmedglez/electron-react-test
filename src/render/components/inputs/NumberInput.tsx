type NumberInputProps = {
  disabled?: boolean;
  label?: string;
  handleNumberInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberInput = (props: NumberInputProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {props.label && (
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300"
        >
          {props.label}
        </label>
      )}
      <input
        disabled={props.disabled}
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "#red",
        }}
        className="bg-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={props.handleNumberInputChange}
      />
    </div>
  );
};
