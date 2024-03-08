type IconProps = {
  color: string;
  size: "small" | "medium" | "large";
};

export const QuestionMarkCircle = ({
  color = "white",
  size = "medium",
}: IconProps) => {
  const width = size === "small" ? "18" : size === "medium" ? "24" : "32";
  const height = size === "small" ? "18" : size === "medium" ? "24" : "32";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={color}
      width={width}
      height={height}
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

export const ChevronUp = ({ color = "white", size = "medium" }: IconProps) => {
  const width = size === "small" ? "18" : size === "medium" ? "24" : "32";
  const height = size === "small" ? "18" : size === "medium" ? "24" : "32";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15L12 9L6 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
