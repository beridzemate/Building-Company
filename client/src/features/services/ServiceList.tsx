import { useQuery } from 'react-query';
import { fetchServices } from './api';
import ServiceCard from '../../components/ServiceCard';

export default function ServiceList() {
  const { data, isLoading } = useQuery('services', fetchServices);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grid gap-4">
      {data.map((s: any) => <ServiceCard key={s.id} service={s} />)}
    </div>
  );
}
