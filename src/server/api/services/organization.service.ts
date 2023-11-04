import { prisma } from '@Server/database.prisma';
import type { Organization, User } from '@prisma/client';
import {
  CreateOrganizationParams,
  UpdateOrganizationParams,
} from '@Api/interfaces/organization.interface';

export const getMyOrganization = async (id: string): Promise<Organization> => {
  const me: User | null = await prisma.user.findUnique({ where: { id } });
  if (!me?.orgId) throw new Error('You are not part of any organization.');

  return (await prisma.organization.findUnique({
    where: { id: me.orgId },
  })) as Organization;
};

export const createMyOrganization = async (
  id: string,
  params: CreateOrganizationParams,
): Promise<Organization> => {
  const { domain, name } = params;

  try {
    const organization: Organization = await prisma.organization.create({
      data: { name, domain },
    });

    await prisma.user.update({
      where: { id },
      data: { orgId: organization.id },
    });

    return organization;
  } catch (error) {
    throw new Error('Organization with this domain already exists.');
  }
};

export const updateMyOrganization = async (
  userId: string,
  params: UpdateOrganizationParams,
): Promise<Organization> => {
  const { id } = await getMyOrganization(userId);

  try {
    return await prisma.organization.update({ where: { id }, data: params });
  } catch (error) {
    throw new Error('Organization with this domain already exists.');
  }
};

export const removeMyOrganization = async (userId: string): Promise<void> => {
  const { id } = await getMyOrganization(userId);

  try {
    await prisma.organization.delete({ where: { id } });
  } catch (error) {
    throw new Error(
      'Something went wrong while trying to delete your organization.',
    );
  }
};
