import { useState } from "react";
import { ProductType } from "../../types";
import { formatCurrency } from "../../utils";
import Button from "../shared/Buttons/Button";
import Modal from "../shared/Modal";
import PriceQuote from "../shared/PriceQuote";

interface IProductCardProps {
  data: ProductType;
}

const ProductCard = ({ data }: IProductCardProps) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className="rounded-[8px] max-w-[300px] w-full h-[300px] px-4 py-2 shadow border-[2px] flex flex-col justify-center">
        <p className="text-[30px] font-bold m-auto">{data?.name}</p>
        <p className="text-[30px] font-bold m-auto">{formatCurrency(data?.price)}</p>
        <span className="mt-auto">
          <Modal  button={<Button title="Buy" height={40} />} content={<PriceQuote data={data}/>}  setModal={setModal}
            modal={modal}/>
        </span>
      </div>
    </>
  );
};

export default ProductCard;
