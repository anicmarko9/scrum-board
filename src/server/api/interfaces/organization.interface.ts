export interface CreateOrganizationParams {
  name: string;
  domain: string;
}

export interface UpdateOrganizationParams {
  name?: string;
  domain?: string;
}
