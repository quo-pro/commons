export const POST_VISIBILITY = [
  'PUBLIC',
  'PRIVATE',
  'FRIENDS',
] as const;

export type POST_VISIBILITY_TYPE = (typeof POST_VISIBILITY)[number];