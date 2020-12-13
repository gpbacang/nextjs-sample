import { useRouter } from 'next/router';

const HotelPage = () => {
  const router = useRouter();
  return <div>Hotel Detail Page {JSON.stringify(router.query)}</div>;
};

export default HotelPage;
