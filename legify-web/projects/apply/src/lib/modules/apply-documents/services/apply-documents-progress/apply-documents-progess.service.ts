import { Injectable } from '@angular/core';
import { ApplyModule } from '../../../../constants';
import { LegifyApplication, RequiredDocument } from '../../../../models';
import { ApplicationProgress } from '../../../../models';
import { ApplyProgressService } from '../../../../services';
import { LegifyDocument } from '../../models';

@Injectable()
export class ApplyDocumentsProgessService extends ApplyProgressService {
  public getModuleProgress(application: LegifyApplication): ApplicationProgress {
    return (
      application.progressInfo.find((progressInfo) => progressInfo.forModule === ApplyModule.DOCUMENTS) || {
        forModule: ApplyModule.DOCUMENTS,
        chunks: [],
        totalProgress: 0
      }
    );
  }

  public calculateProgressForPerson(
    allDocumentsForCustomer: LegifyDocument[],
    requiredDocsForCustomer: RequiredDocument[]
  ): number {
    const reqCompletionStatus = requiredDocsForCustomer.map((docRequirement) => {
      const uploadedDocCount = allDocumentsForCustomer.filter(
        (doc) => doc.documentGroup === docRequirement.documentGroup
      ).length;

      return uploadedDocCount >= docRequirement.minimumUploads;
    });

    return (reqCompletionStatus.filter((status) => status).length / requiredDocsForCustomer.length) * 100;
  }
}
