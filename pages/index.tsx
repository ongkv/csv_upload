import React, { useCallback, useEffect, useState } from "react";
import UploadDropzoneBox from "@/components/upload/UploadDropzoneBox";
import UploadResultsGrid from "@/components/upload/UploadResultsGrid";
import Papa from "papaparse";
import { CsvRowData, ParsedCsvRow } from "@/types/upload";
import { isCorrectCsvHeaders } from "@/helpers/upload";
import { useSnackbar } from "@/components/snackbar/useSnackbar";

export default function UploadPage() {
  const [uploadedRows, setUploadedRows] = useState<ParsedCsvRow[]>([]);
  const [validatedRows, setValidatedRows] = useState<CsvRowData[]>([]);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isProcessed, setIsProcessed] = useState<boolean>(false);
  const snackbar = useSnackbar();

  const resetIsUploaded = () => {
    setIsUploaded(false);
  };

  const resetIsProcessed = () => {
    setIsProcessed(false);
  };

  // CSV Parse
  useEffect(() => {
    if (isUploaded && uploadedRows.length === 0) {
      resetIsUploaded();

      return snackbar.showMessage({
        message: "Please ensure the CSV file is not empty.",
        error: true,
      });
    }

    if (!isProcessed && isUploaded && uploadedRows[0]) {
      if (!isCorrectCsvHeaders(uploadedRows)) {
        resetIsUploaded();

        return snackbar.showMessage({
          message:
            "We were unable to process the file as it contained invalid headers. Please ensure the CSV file includes the required column headers.",
          error: true,
        });
      } else {
        const validRows: CsvRowData[] = [];

        uploadedRows.forEach((row) => {
          validRows.push({
            ...row.data,
            postId: parseInt(row.data["postId"]),
            id: parseInt(row.data["id"]),
          });
        });

        setValidatedRows(validRows);

        const message = setTimeout(() => {
          setIsProcessed(true);

          return snackbar.showMessage({
            message: "CSV was successfully uploaded.",
          });
        }, 5_000);

        return () => clearTimeout(message);
      }
    }
  }, [isUploaded, uploadedRows, isProcessed, snackbar]);

  // CSV Upload
  const onDrop = useCallback(async (acceptedFile: File[]) => {
    resetIsUploaded();
    resetIsProcessed();

    acceptedFile.map((file: File) => {
      const parsedRows: any[] = [];

      Papa.parse(file, {
        header: true,
        skipEmptyLines: "greedy",
        step: function (result) {
          parsedRows.push(result);
        },
        complete: function (_, uploadedFile) {
          setIsUploaded(true);
          setUploadedRows(parsedRows);
          setFileName(uploadedFile.name);
        },
      });
    });
  }, []);

  return (
    <>
      <UploadDropzoneBox
        buttonDescription={
          fileName ? `${fileName} (${uploadedRows.length})` : "Upload CSV File"
        }
        isLoading={isUploaded && !isProcessed}
        onDrop={onDrop}
      />
      <UploadResultsGrid
        isUploaded={isUploaded}
        isProcessed={isProcessed}
        rows={validatedRows}
      />
    </>
  );
}
