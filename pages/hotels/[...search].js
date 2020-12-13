import { useRouter } from 'next/router';

const HotelsSearch = () => {
  const router = useRouter();
  return <div>Hotels Search Page {JSON.stringify(router.query)}</div>;
};

export default HotelsSearch;
