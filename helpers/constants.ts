import { NavbarItem } from "@/types/navbar";

export const NAV_BAR_ITEMS: NavbarItem[] = [
  {
    name: "Home",
    url: "/",
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

export const FIELD_TITLE_TO_COL_DEF_MAP = {
  postId: {
    headerName: "Post ID",
    minWidth: 100,
    flex: 0.1,
  },
  id: {
    headerName: "ID",
    minWidth: 100,
    flex: 0.1,
  },
  name: {
    headerName: "Name",
    minWidth: 300,
    flex: 0.3,
  },
  email: {
    headerName: "Email",
    minWidth: 200,
    flex: 0.2,
  },
  body: {
    headerName: "Body",
    minWidth: 500,
    flex: 0.5,
  },
};

type FieldTitles = keyof typeof FIELD_TITLE_TO_COL_DEF_MAP;

export const FIELD_TITLES: FieldTitles[] = [
  "postId",
  "id",
  "name",
  "email",
  "body",
];
