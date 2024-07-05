interface User {
  color: string;
  img: string;
  title: string;
  href: string;
}

interface UsersList {
  users: Array<User>;
}

export const formatUsers = (data: any) => {
  if (!data) return [];
  return (data as UsersList).users;
};
