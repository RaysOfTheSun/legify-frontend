export interface RequiredDocument {
  forRoles: string[];
  documentType: string;
  minimumUploads: number;
  maximumUploads: number;
  documentCategory: string;
}
