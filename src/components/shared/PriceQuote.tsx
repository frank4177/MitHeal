
import { ProductType } from '../../types'
import { formatCurrency } from '../../utils'
import PaystackButton from './Buttons/PaystackButton'

interface IPriceQuoteProps {
    data: ProductType
}

const PriceQuote = ({data}: IPriceQuoteProps) => {
    const total = Math.ceil(data.price + 500)
  return (
    <>
        <div className="flex flex-col gap-5 ">
        <div className="flex flex-row gap-3">
          <p className="font-bold">Item:</p>
          <span>{data.name}</span>
        </div>

        <div className="flex flex-row gap-3">
          <p className="font-bold">Price:</p>
          <span>{formatCurrency(data.price)}</span>
        </div>
        <div className="flex flex-row gap-3">
          <p className="font-bold">Tax:</p>
          <span>N500</span>
        </div>
        <div className="flex flex-row gap-3">
          <p className="font-bold">Total:</p>
          <span className="text-green-700 font-bold">{formatCurrency(total)}</span>
        </div>
        <PaystackButton total={total}/>
      </div>
    </>
  )
}

export default PriceQuote