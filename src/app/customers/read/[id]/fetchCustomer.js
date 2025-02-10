export default async function fetchCustomer(id) {
  console.log("Received ID in fetchCustomer:", id); // 追加
  
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/customers/${id}`;
  console.log("Fetching from:", url); // 追加

  const res = await fetch(url, { cache: "no-cache" });

  // const res = await fetch(
  //   // process.env.NEXT_PUBLIC_API_ENDPOINT + `/customers?customer_id=${id}`,
  //   `${process.env.NEXT_PUBLIC_API_ENDPOINT}/customers/${id}`, // クエリパラメータからパスパラメータに変更
  //   { cache: "no-cache" }
  // );

  if (!res.ok) {
    throw new Error("Failed to fetch customer");
  }
  return res.json();
}
