import useSwr from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CreateUser() {
  const { data, error } = useSwr(`/api/create_user`, fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Failed to load create user</div>;

  return (
    <div>
      {data.firstName} {data.lastName}
    </div>
  );
}
