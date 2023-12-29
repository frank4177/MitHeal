
import { InputType } from '../../../types'

const Date = ({ title, handleChange, name, required }: InputType) => {
  return (
    <>
        <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <div className="mb-1">{title}</div>
          <span className="text-red-600">*</span>
        </div>
            <input type="date" name={name} className="rounded-[8px] h-[40px] border-[2px] p-1" required={required} onChange={handleChange}/>
        </div>
    </>
  )
}

export default Date