import { ParsedCsvRow } from "@/types/upload";
import { isCorrectCsvHeaders } from "../upload";

test("#isCorrectCsvHeaders should return true if the CSV headers match the expected format for the upload page", () => {
  const validCsv: ParsedCsvRow[] = [
    {
      data: {},
      meta: {
        fields: ["postId", "id", "name", "email", "body"],
      },
    },
  ];

  expect(isCorrectCsvHeaders(validCsv)).toBe(true);
});

test("#isCorrectCsvHeaders should return false if the CSV headers do not match the expected format for the upload page", () => {
  const invalidCsv: ParsedCsvRow[] = [
    {
      data: {},
      meta: {
        fields: [],
      },
    },
  ];

  expect(isCorrectCsvHeaders(invalidCsv)).toBe(false);
});
