import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AiModelIndex() {
  const router = useRouter();
  useEffect(() => { router.replace('/aimodel/visualization') }, [router]);
  return null;
}
