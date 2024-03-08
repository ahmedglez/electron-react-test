type NumberInputProps = {
  disabled?: boolean;
  handleNumberInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberInput = (props: NumberInputProps) => {
  return (
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
  );
};
