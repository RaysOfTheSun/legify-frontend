export interface SupportingDocument {
  id: string;
  file: string;
  name: string;
  size: number;
  ownerId: string;
  invalid?: boolean;
  fileType: string;
  documentType: string;
  documentCategory: string;
}
