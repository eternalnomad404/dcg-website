interface Competition {
  id: string;
  title: string;
  platform: string;
  description: string;
  deadline: Date;
  createdAt: Date;
  createdBy: {
    id: string;
    name: string;
    email: string;
  };
  requirements: string;
  isActive: boolean;
}

export default Competition;