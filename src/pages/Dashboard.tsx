import type { User } from "../types/user";

interface Props {
  user: User;
}

const Dashboard = ({ user }: Props) => {
  return <h1>Welcome, {user.name}</h1>;
};

export default Dashboard;
