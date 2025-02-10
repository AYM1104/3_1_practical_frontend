// export default function Home() {
//   return <h1>Hello World</h1>
// }

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("API Endpoint:", process.env.NEXT_PUBLIC_API_ENDPOINT);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}