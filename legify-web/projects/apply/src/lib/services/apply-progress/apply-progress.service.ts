import { Injectable } from '@angular/core';
import { LegifyApplication } from '../../models';
import { ApplicationProgress } from '../../models/application/application-progress/application-progress';
import { ApplicationProgressChunk } from '../../models/application/application-progress/application-progress-chunk';
@Injectable()
export abstract class ApplyProgressService {
  public abstract getModuleProgress(application: LegifyApplication): ApplicationProgress;

  public calculateTotalModuleProgress(progressInfo: ApplicationProgress, totalNumberOfChunks: number): number {
    const isModuleComplete = progressInfo.chunks.every((chunk) => chunk.totalProgress === 100);

    return progressInfo.chunks.length === totalNumberOfChunks && isModuleComplete ? 100 : 0;
  }

  protected makeProgressChunk(chunkId: string, chunkValue: number): ApplicationProgressChunk {
    return {
      id: chunkId,
      totalProgress: chunkValue
    };
  }

  public getProgressChunk(application: LegifyApplication, chunkId: string): ApplicationProgressChunk {
    const { chunks } = this.getModuleProgress(application);
    return chunks.find((chunk) => chunk.id === chunkId) || this.makeProgressChunk(chunkId, 0);
  }

  public updateModuleProgressAndChunks(
    application: LegifyApplication,
    targetChunkId: string,
    totalProgress: number,
    totalNumberOfChunks: number
  ): ApplicationProgress[] {
    const progressForModule = { ...this.getModuleProgress(application) };
    const targetChunkInd = progressForModule.chunks.findIndex((chunk) => chunk.id === targetChunkId);
    const moduleProgressInd = application.progressInfo.findIndex(
      (progressInfo) => progressInfo.forModule === progressForModule.forModule
    );

    const targetChunk =
      targetChunkInd === -1
        ? this.makeProgressChunk(targetChunkId, 0)
        : progressForModule.chunks.splice(targetChunkInd, 1)[0];

    targetChunk.totalProgress = totalProgress;
    progressForModule.chunks.push(targetChunk);

    progressForModule.totalProgress = this.calculateTotalModuleProgress(progressForModule, totalNumberOfChunks);

    const applicationProgressInfo = [...application.progressInfo];
    applicationProgressInfo.splice(moduleProgressInd, 1, progressForModule);

    return applicationProgressInfo;
  }
}
