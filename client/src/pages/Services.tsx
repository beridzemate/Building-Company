import CreateService from '../features/services/CreateService';
import ServiceList from '../features/services/ServiceList';

export default function Services() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Services</h1>
      <CreateService />
      <ServiceList />
    </div>
  );
}
