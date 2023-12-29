import axios from "axios";
import useSWRMutation from "swr/mutation";
import CryptoJS from "crypto-js";
import { JobRequestType } from "../../types";

// JOB REQUEST
export const useBiometricJobRequest = () => {
  const generateUniqueId = () => {
    return "unique_id_" + Math.random().toString(36).substring(7);
  };

  const biometricJobRequest = async (url: string, { arg }: JobRequestType) => {
    const currentTimestamp = new Date().toISOString();
    const apiKey = "<your-api-key>";
    const partnerId = "<your-partner-id>";
    const jobId = generateUniqueId();
    const userId = generateUniqueId();

    // Generate signature
    const calculateSignature = (
      apiKey: string,
      partnerId: string,
      timestamp: string
    ) => {
      const secretKey = "your-secret-key";
      // Construct the message to sign
      const messageToSign = `${apiKey}${partnerId}${timestamp}`;

      // Use crypto-js to calculate the HMAC-SHA256
      const signature = CryptoJS.HmacSHA256(messageToSign, secretKey).toString(
        CryptoJS.enc.Hex
      );

      return signature;
    };

    // Params
    const param = {
      callback_url: "https://<your callback URL>/",
      partner_params: {
        job_id: jobId,
        job_type: 1,
        user_id: userId,
      },
      signature: calculateSignature(apiKey, partnerId, currentTimestamp),
      smile_client_id: "<partner id>",
      source_sdk_version: "1.0.0",
      source_sdk: "rest_api",
      timestamp: currentTimestamp,
    };

    try {
      const res = await axios.post(url, param);

      if (res) {
        arg?.setModal(true);
      }
    } catch (error) {
      if (error) {
        arg?.setModal(true);
      }
      console.error(error);
    }
  };

  // SWR mutation to trigger the API request
  const { trigger, data, isMutating } = useSWRMutation(
    `https://testapi.smileidentity.com/v1/upload`,
    biometricJobRequest
  );

  return { isMutating, trigger, data };
};



// BASIC KYC
export const useBasicKYC = () => {
  const biometricJobRequest = async (url: string, { arg }: JobRequestType) => {

    const param = {
      callback_url: "example.webhook.com",
      country: "NG",
      dob: "2000-09-20",
      first_name: "Joe",
      gender: "M",
      id_number: "00000000000",
      id_type: "NIN",
      last_name: "Leo",
      middle_name: "Doe",
      partner_id: "023",
      partner_params: {
        job_id: "3ba0e15e-1a56-4799-a94d-b0e084f50256",
        user_id: "4cb0f26-2b567-5800-b05e-c0f095g6036",
      },
      phone_number: "0123456789",
      signature: "...",
      source_sdk_version: "2.0.0",
      source_sdk: "rest_api",
      timestamp: "2021-08-12T17:57:00.614879",
    };

    try {
      const res = await axios.post(url, param);

      if (res) {

      }
    } catch (error) {
      if (error) {
        arg?.setModal(true);
      }
      console.error(error);
    }
  };

  // SWR mutation to trigger the API request
  const { trigger, data, isMutating } = useSWRMutation(
    `https://testapi.smileidentity.com/v2/verify_async`,
    biometricJobRequest
  );

  return { isMutating, trigger, data };
};
