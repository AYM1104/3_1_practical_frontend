export default async function fetchCustomer(id) {
  const res = await fetch(
    // process.env.NEXT_PUBLIC_API_ENDPOINT + `/customers?customer_id=${id}`,
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/customers/${id}`, // クエリパラメータからパスパラメータに変更
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch customer");
  }
  return res.json();
}
