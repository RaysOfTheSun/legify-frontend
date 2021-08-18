import { ApplyModuleConfig } from './apply-module-config';

export interface ApplyModuleConfigMapping<C extends ApplyModuleConfig = any> {
  forModule: string;
  config: C;
}
