export const MESSAGE_STATUS_ENUM = [
  'NEW',
  'DELIVERED',
  'READ',
  'UPDATED',
] as const;

export type T_MESSAGE_STATUS = (typeof MESSAGE_STATUS_ENUM)[number];
