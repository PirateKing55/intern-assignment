interface ButtonProps {
  label: string;
  classname?: string;
  handleClick?: () => void;
}

function Button({ label, classname, handleClick }: ButtonProps) {
  return (
    <button className={`bg-primary text-white rounded cursor-pointer hover:scale-105 transform transition-transform duration-200 ease-in-out flex justify-center items-center ${classname}`} onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
