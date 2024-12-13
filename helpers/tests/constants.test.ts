import { FIELD_TITLE_TO_HEADER_MAP } from "../constants";

test("#FIELD_TITLE_TO_HEADER_MAP should map field titles to the correct headers", () => {
  expect(FIELD_TITLE_TO_HEADER_MAP["body"]).toBe("Body");
  expect(FIELD_TITLE_TO_HEADER_MAP["email"]).toBe("Email");
  expect(FIELD_TITLE_TO_HEADER_MAP["id"]).toBe("ID");
  expect(FIELD_TITLE_TO_HEADER_MAP["name"]).toBe("Name");
  expect(FIELD_TITLE_TO_HEADER_MAP["postId"]).toBe("Post ID");
});
