import { useMemo } from "react";
import { Button, Container, Box, CircularProgress } from "@mui/material";
import { useDropzone } from "react-dropzone";
import type { DropzoneProps } from "react-dropzone";
import { FileUpload } from "@mui/icons-material";
import {
  ACTIVE_DROPZONE_STYLE,
  BASE_DROPZONE_STYLE,
} from "@/helpers/constants";

interface UploadDropzoneBoxProps extends DropzoneProps {
  buttonDescription: string;
  isLoading: boolean;
}

export default function UploadDropzoneBox({
  buttonDescription,
  isLoading,
  noClick = true,
  noKeyboard = true,
  maxFiles = 1,
  accept = {
    "text/csv": [".csv"],
  },
  ...rest
}: UploadDropzoneBoxProps) {
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    noClick,
    noKeyboard,
    maxFiles,
    accept,
    ...rest,
  });

  const style = useMemo(
    () => ({
      ...BASE_DROPZONE_STYLE,
      ...(isDragActive ? ACTIVE_DROPZONE_STYLE : {}),
    }),
    [isDragActive]
  );

  return (
    <>
      <Container {...getRootProps()} style={style}>
        <input {...getInputProps()} disabled={isLoading} />
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px 0 40px 0",
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <FileUpload style={{ fontSize: "40px" }} />
          )}

          <Button variant="text" onClick={open} style={{ marginTop: "16px" }}>
            {buttonDescription}
          </Button>
        </Box>
      </Container>
    </>
  );
}
