type NumberInputProps = {
  disabled?: boolean;
  label?: string;
  defaultValue?: number;
  value?: number;
  handleNumberInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberInput = (props: NumberInputProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {props.label && (
        <label
          htmlFor="default-checkbox"
          style={{ color: "rgba(255,255,255,0.50)" }}
          className="ms-2 text-sm font-medium"
        >
          {props.label}
        </label>
      )}
      <input
        disabled={props.disabled}
        type="number"
        value={props.value}
        id="number-input"
        aria-describedby="helper-text-explanation"
        defaultValue={props.defaultValue || 0}
        style={{
          width: "80px",
          height: "30px",
          backgroundColor: "#4E4E54",
          opacity: props.disabled ? 0.2 : 1,
        }}
        className=" text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={props.handleNumberInputChange}
      />
    </div>
  );
};
