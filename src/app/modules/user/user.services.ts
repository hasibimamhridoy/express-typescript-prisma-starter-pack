import { prisma } from "../../../app";

const getUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

const getUser = async (id: string) => {
  const getUser = await prisma.user.findUnique({ where: { id: id } });
  return getUser;
};

const createUser = async (payload: any): Promise<any> => {
  const createUserResult = await prisma.user.create({
    data: payload,
  });
  return createUserResult;
};

const updateUser = async (id: string, payload: any): Promise<any> => {
  return null;
};

const deleteUser = async (id: string) => {
  const deleteUser = await prisma.user.delete({ where: { id: id } });
  return deleteUser;
};

export const userServices = {
  createUser,
  updateUser,
  getUser,
  getUsers,
  deleteUser,
};
