
import { usePaystackPayment } from "react-paystack";
import Button from "./Button";

interface IPaystackProps {
  total: number;
}

const PaystackButton = ({ total }: IPaystackProps) => {

    // Calculate Kobo value
  function calculateKoboValue(nairaAmount: number) {
    const conversionFactor = 20000 / 200;
    const koboValue = nairaAmount * conversionFactor;
    return koboValue;
  }

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: calculateKoboValue(total), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_f4624d531b2cba45933ab1da819aba230d64c00f",
  };

  // you can call this function anything
  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);

    const handlePay = () => {
      initializePayment(onSuccess, onClose);
    };
    return (
      <div>
        <Button
          title="Pay Now"
          width={250}
          height={40}
          handleClick={handlePay}
        />
      </div>
    );
  };
  return (
    <div>
      <PaystackHookExample />
    </div>
  );
};

export default PaystackButton;
