export interface Request {
    id: number;
    name: string;
    email: string;
    phone?: string;
    message?: string;
    createdAt: Date;
  }
  