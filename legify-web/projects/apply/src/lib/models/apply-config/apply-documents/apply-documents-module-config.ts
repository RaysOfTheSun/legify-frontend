import { ApplyModuleConfig } from '../apply-module-config';
import { RequiredDocument } from './required-document';

export interface ApplyDocumentsModuleConfig extends ApplyModuleConfig {
  requiredDocuments: RequiredDocument[];
}
