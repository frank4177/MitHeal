
import { InputType } from "../../../../types";



const InputField = ({ title, handleChange, name, type, required }: InputType) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <div className="mb-1">{title}</div>
          {required ? <span className="text-red-600">*</span> : null}
        </div>

        <input
          type={type}
          name={name}
          className="rounded-[8px] h-[40px] border-[2px] p-1"
          onChange={handleChange}
          required={required}
        />
      </div>
    </>
  );
};

export default InputField;
