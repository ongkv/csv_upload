import React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FIELD_TITLE_TO_HEADER_MAP, FIELD_TITLES } from "@/helpers/constants";
import { CsvRowData } from "@/types/upload";

interface UploadResultsGridProps {
  isUploaded: boolean;
  isProcessed: boolean;
  rows: CsvRowData[];
}

export default function UploadResultsGrid({
  isUploaded,
  isProcessed,
  rows,
}: UploadResultsGridProps) {
  const columns: GridColDef[] = FIELD_TITLES.map((title) => {
    return {
      field: title,
      headerName: FIELD_TITLE_TO_HEADER_MAP[title],
      headerAlign: "left",
      minWidth: 200,
      flex: 0.4,
    };
  });

  return (
    isUploaded && (
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography variant="h6" fontSize="16px" color={"textDisabled"}>
            Results
          </Typography>
        </AccordionSummary>

        <DataGrid
          loading={!isProcessed}
          pagination
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              csvOptions: { disableToolbarButton: true },
              printOptions: { disableToolbarButton: true },
              quickFilterProps: { debounceMs: 250 },
            },
            loadingOverlay: {
              variant: "skeleton",
              noRowsVariant: "skeleton",
            },
          }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          ignoreDiacritics
          autoHeight
        />
      </Accordion>
    )
  );
}
