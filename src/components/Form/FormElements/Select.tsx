import { GenderType } from "../../../types";

interface ISelectProps {
  options?: GenderType[];
  title: string;
  name: string;
  handleChange: (e: any) => void;
  required?: boolean
}

const Select = ({ options, title, name, handleChange , required}: ISelectProps) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <div className="mb-1">{title}</div>
          {required ? <span className="text-red-600">*</span> : null}
        </div>

        <select
          onChange={handleChange}
          name={name}
          id=""
          className="rounded-[8px] h-[40px] border-[2px] p-1"
          required={required}
        >
          <option value="">Select</option>
          {options?.map((item) => (
            <option value={item.value} key={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;
