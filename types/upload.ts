export type ParsedCsvRow = {
  data: any;
  meta: {
    fields: string[];
  };
};

export type CsvRowData = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
