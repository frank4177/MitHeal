
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IPhoneNumberProps{
    title: string
    error: string | null
    handleChange: (e: any) => void;
}


const PhoneNumberInput = ({ title, handleChange, error }: IPhoneNumberProps) => {
  return (
    <>
      <div>
        <div className="flex flex-row">
          <div className="mb-1">{title}</div>
          <span className="text-red-600">*</span>
        </div>
        <PhoneInput
          country={"ng"}
          // value={value}
          onChange={(phone) => handleChange(phone)}
          onlyCountries={["ng", "gh"]}
          inputStyle={{
            width: "100%",
            height: "41px",
            border: "1px solid #989FAD",
          }}
        />
        {error ? <span className="text-[14px] text-red-600">{error}</span> : null}
      </div>
    </>
  );
};

export default PhoneNumberInput;
