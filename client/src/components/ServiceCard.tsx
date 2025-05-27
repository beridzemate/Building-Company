interface Service {
    id: string;
    title: string;
    description: string;
  }
  
  export default function ServiceCard({ service }: { service: Service }) {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold">{service.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: service.description }} />
      </div>
    );
  }
  