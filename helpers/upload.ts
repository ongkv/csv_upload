import { ParsedCsvRow } from "@/types/upload";

export function isCorrectCsvHeaders(parsedCsvRows: ParsedCsvRow[]): boolean {
  const { fields: headers } = parsedCsvRows[0].meta;

  return (
    headers.includes("postId") &&
    headers.includes("id") &&
    headers.includes("name") &&
    headers.includes("email") &&
    headers.includes("body")
  );
}
