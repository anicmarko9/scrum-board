import { prisma } from '@Server/database.prisma';
import type { Board, User } from '@prisma/client';
import {
  CreateBoardParams,
  UpdateBoardParams,
} from '@Api/interfaces/board.interface';

export const getMyBoard = async (id: string): Promise<Board> => {
  const me: User | null = await prisma.user.findUnique({ where: { id } });
  if (!me?.orgId) throw new Error('You are not part of any board.');

  return (await prisma.board.findUnique({
    where: { id: me.orgId },
  })) as Board;
};
export const createMyBoard = async (
  id: string,
  params: CreateBoardParams,
): Promise<Board> => {
  const { name, orgId } = params;

  try {
    const board: Board = await prisma.board.create({
      data: { name, orgId },
    });

    await prisma.user.update({
      where: { id },
      data: { orgId: board.id },
    });

    return board;
  } catch (error) {
    throw new Error('Board with this name already exists.');
  }
};

export const updateMyBoard = async (
  userId: string,
  params: UpdateBoardParams,
): Promise<Board> => {
  const { id } = await getMyBoard(userId);

  try {
    return await prisma.board.update({ where: { id }, data: params });
  } catch (error) {
    throw new Error('Board with this name already exists.');
  }
};

export const removeMyBoard = async (userId: string): Promise<void> => {
  const { id } = await getMyBoard(userId);

  try {
    await prisma.board.delete({ where: { id } });
  } catch (error) {
    throw new Error('Something went wrong while trying to delete your board.');
  }
};
