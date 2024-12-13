import { FIELD_TITLE_TO_COL_DEF_MAP } from "../constants";

test("#FIELD_TITLE_TO_COL_DEF_MAP should map postId to correct column definition object", () => {
  const { headerName, minWidth, flex } = FIELD_TITLE_TO_COL_DEF_MAP["postId"];

  expect(headerName).toBe("Post ID");
  expect(minWidth).toBe(100);
  expect(flex).toBe(0.1);
});

test("#FIELD_TITLE_TO_COL_DEF_MAP should map id to correct column definition object", () => {
  const { headerName, minWidth, flex } = FIELD_TITLE_TO_COL_DEF_MAP["id"];

  expect(headerName).toBe("ID");
  expect(minWidth).toBe(100);
  expect(flex).toBe(0.1);
});

test("#FIELD_TITLE_TO_COL_DEF_MAP should map name to correct column definition object", () => {
  const { headerName, minWidth, flex } = FIELD_TITLE_TO_COL_DEF_MAP["name"];

  expect(headerName).toBe("Name");
  expect(minWidth).toBe(300);
  expect(flex).toBe(0.3);
});
test("#FIELD_TITLE_TO_COL_DEF_MAP should map email to correct column definition object", () => {
  const { headerName, minWidth, flex } = FIELD_TITLE_TO_COL_DEF_MAP["email"];

  expect(headerName).toBe("Email");
  expect(minWidth).toBe(200);
  expect(flex).toBe(0.2);
});
test("#FIELD_TITLE_TO_COL_DEF_MAP should map body to correct column definition object", () => {
  const { headerName, minWidth, flex } = FIELD_TITLE_TO_COL_DEF_MAP["body"];

  expect(headerName).toBe("Body");
  expect(minWidth).toBe(500);
  expect(flex).toBe(0.5);
});
