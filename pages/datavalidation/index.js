import { useEffect } from "react";
import { useRouter } from "next/router";
export default function DataValidationIndex() {
  const router = useRouter();
  useEffect(() => { router.replace('/datavalidation/datasets') }, [router]);
  return null;
}
