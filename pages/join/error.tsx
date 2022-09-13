import { useRouter } from "next/router";

const JoinError = () => {
  const { query } = useRouter();

  return <div>An error occurred: {query.error}</div>;
};

export default JoinError;
