import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Greetings() {
  const router = useRouter();

  const { data, error } = useSwr(
    router.query.first_name
      ? `/api/greetings/${router.query.first_name}`
      : null,
    fetcher
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Failed to load greetings</div>;

  return <div>{data.greetings}</div>;
}
