import { NavbarItem } from "@/types/navbar";

export const NAV_BAR_ITEMS: NavbarItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Upload CSV",
    url: "/upload",
  },
] as const;

export const DEFAULT_SNACKBAR_DURATION = 6_000;

export const BASE_DROPZONE_STYLE = {
  display: "flex",
  justifyContent: "center",
  border: `2px dashed`,
  borderRadius: "8px",
} as const;

export const ACTIVE_DROPZONE_STYLE = {
  border: `2px dashed`,
} as const;

export const FIELD_TITLE_TO_HEADER_MAP = {
  postId: "Post ID",
  id: "ID",
  name: "Name",
  email: "Email",
  body: "Body",
} as const;

type FieldTitles = keyof typeof FIELD_TITLE_TO_HEADER_MAP;

export const FIELD_TITLES: FieldTitles[] = [
  "postId",
  "id",
  "name",
  "email",
  "body",
];
