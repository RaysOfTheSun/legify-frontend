export interface RequiredDocument {
  forRoles: string[];
  documentType: string;
  documentGroup: string;
  minimumUploads: number;
  maximumUploads: number;
}
