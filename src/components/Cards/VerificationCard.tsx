
import { FaPlus } from "react-icons/fa6";

interface VerificationProps {
  title: string;
  backgroundColor: string;
  handleClick: () => void;
}

const VerificationCard = ({
  title,
  backgroundColor,
  handleClick,
}: VerificationProps) => { 
  return (
    <>
      <div
        onClick={handleClick}
        className={`w-[300px] h-[200px] rounded-[15px] flex flex-col items-center justify-center cursor-pointer`}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <FaPlus className="text-[40px] text-white" />
        <p className="text-[40px] font-bold text-white">{title}</p>
      </div>
    </>
  );
};

export default VerificationCard;
