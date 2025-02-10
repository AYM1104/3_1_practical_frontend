"use client";
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";
import BackButton from "./back_button";
import fetchCustomer from "./fetchCustomer";
import { useEffect, useState, use } from "react";

export default function ReadPage(props) {

  console.log("🚀 ReadPage Component Loaded"); // ✅ ページが読み込まれたか確認
  console.log("Props received in ReadPage:", props); // ✅ `props` の値を確認
  console.log("Params:", props.params); // ✅ `params` の値を確認

  const params = use(props.params);
  const id = params.id;

  console.log("🆔 Extracted Customer ID:", id); // ✅ `id` の値を確認

  const [customerInfo, setCustomerInfo] = useState([]);

  useEffect(() => {
    const fetchAndSetCustomer = async () => {
      // 確認用
      console.log("Using API Endpoint:", process.env.NEXT_PUBLIC_API_ENDPOINT);
      const customerData = await fetchCustomer(id);
      setCustomerInfo(customerData);
    };
    fetchAndSetCustomer();
  }, []);

  return (
    <>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <OneCustomerInfoCard {...customerInfo} />
        <BackButton>戻る</BackButton>
      </div>
    </>
  );
}
