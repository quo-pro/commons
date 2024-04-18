export const USER_ROLE_LIST = [
  'USER',
  'SUPER_ADMIN',
  'SUPPORT',
] as const;

export type USER_ROLES_TYPE = (typeof USER_ROLE_LIST)[number];