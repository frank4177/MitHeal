import { useState } from "react";
import Layout from "../components/layout/Wrappers/DashboardWrapper";
import { Biometric } from "../components/shared/Webcam";
// import VerificationCard from "../components/Cards/VerificationCard";
import Modal from "../components/shared/Modal";
// import { useBiometricJobRequest } from "../services/APIs/verification";

const VerificationPage = () => {
  const [modal, setModal] = useState(false);
  // const {trigger} = useBiometricJobRequest()

  return (
    <>
      <Layout>
        {/* <div className="flex flex-row gap-5">
          <VerificationCard
            title="Biometric"
            backgroundColor="#7C6AED"
            handleClick={handleClick}
          />

          <VerificationCard
            title="Basic KYC"
            backgroundColor="orange"
            handleClick={handleClick}
          />
        </div> */}

        <Biometric />
        <Modal
          setModal={setModal}
          modal={modal}
          width={900}
          height={200}

          // content={<PriceQuote data={data} />}
        />
      </Layout>
    </>
  );
};

export default VerificationPage;
