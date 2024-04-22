export const FLAG_REASONS = [
  'INAPPROPRIATE',
  'HARASSMENT',
  'SPAM',
  'OTHER',
] as const;

export const FLAG_STATUSES = [
  'PENDING',
  'REVIEWED',
  'ACTION_TAKEN',
  'DISMISSED',
] as const;

export type FLAG_REASON_TYPE = (typeof FLAG_REASONS)[number];
export type FLAG_STATUS_TYPE = (typeof FLAG_STATUSES)[number];
