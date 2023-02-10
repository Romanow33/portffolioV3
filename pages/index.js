import { useRouter } from "next/router";
import { useEffect } from "react";

function HomesPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });

  return;
}

export default HomesPage;
