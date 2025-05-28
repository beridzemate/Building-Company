import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

interface StrapiService {
  id: number;
  attributes: {
    [key: `title_${string}`]: string;
    [key: `description_${string}`]: string;
    icon?: {
      data?: {
        attributes?: {
  return response.data.data.map((service: StrapiService) => ({
        };
      };
    };
  };
}

export const fetchServices = async (lang: string) => {
  const response = await axios.get(`${STRAPI_URL}/api/services`, {
    params: {
      'populate': '*',
      'locale': lang
    }
  });
  
  return response.data.data.map((service: any) => ({
    id: service.id,
    title: service.attributes[`title_${lang}`],
    description: service.attributes[`description_${lang}`],
    icon: service.attributes.icon?.data?.attributes?.url
      ? `${STRAPI_URL}${service.attributes.icon.data.attributes.url}`
      : null
  }));
};

export const submitContactRequest = async (data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: number;
}) => {
  return axios.post(`${STRAPI_URL}/api/contact-requests`, {
    data: {
      ...data,
      service: data.service ? { id: data.service } : null
    }
  });
};

// Similar function for projects