import { ApplicationProgressChunk } from './application-progress-chunk';

export interface ApplicationProgress {
  chunks: ApplicationProgressChunk[];
  forModule: string;
  totalProgress: number;
}
