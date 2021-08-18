import { ApplyModuleConfig } from '../apply-module-config';
import { FormFieldToDataSourceMap } from './form-field-to-data-source-map';

export interface ApplyBasicInfoModuleConfig extends ApplyModuleConfig {
  formFieldToDataSourceMaps: FormFieldToDataSourceMap[];
}
