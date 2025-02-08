import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";

// async function fetchCustomer(id) {
//   const res = await fetch(
//     process.env.API_ENDPOINT + `/customers?customer_id=${id}`
//   );
//   if (!res.ok) {
//     throw new Error("Failed to fetch customer");
//   }
//   return res.json();
// }
async function fetchCustomer(id) {
  try {
    const res = await fetch(
      process.env.API_ENDPOINT + `/customers?customer_id=${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch customer");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null; // エラー時に null を返す
  }
}

// export default async function ReadPage({ query }) {
//   const { id } = query;
//   const customerInfo = await fetchCustomer(id);

//   return (
//     <>
//       <div className="alert alert-success">更新しました</div>
//       <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
//         <OneCustomerInfoCard {...customerInfo[0]} />
//       </div>
//       <button className="btn btn-outline btn-accent">
//         <a href="/customers">一覧に戻る</a>
//       </button>
//     </>
//   );
// }

export default async function ReadPage({ query = {} }) {
  const { id } = query;

  if (!id) {
    return <div>Error: Customer ID is missing.</div>;
  }

  const customerInfo = await fetchCustomer(id);

  if (!customerInfo || customerInfo.length === 0) {
    return <div>Error: Customer information not found.</div>;
  }

  return (
    <>
      <div className="alert alert-success">更新しました</div>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <OneCustomerInfoCard {...customerInfo[0]} />
      </div>
      <button className="btn btn-outline btn-accent">
        <a href="/customers">一覧に戻る</a>
      </button>
    </>
  );
}
