import { Injectable } from '@angular/core';
import { SupportingDocument } from '../../../apply-document-upload';
import { ApplyAppModule } from '../../../../constants';
import { LegifyApplication, RequiredDocument } from '../../../../models';
import { ApplicationProgress } from '../../../../models';
import { ApplyProgressService } from '../../../../services';

@Injectable()
export class ApplyDocumentsProgessService extends ApplyProgressService {
  public getModuleProgress(application: LegifyApplication): ApplicationProgress {
    return (
      application.progressInfo.find((progressInfo) => progressInfo.forModule === ApplyAppModule.DOCUMENTS) || {
        forModule: ApplyAppModule.DOCUMENTS,
        chunks: [],
        totalProgress: 0
      }
    );
  }

  public calculateProgressForPerson(
    allDocumentsForCustomer: SupportingDocument[],
    requiredDocsForCustomer: RequiredDocument[]
  ): number {
    const reqCompletionStatus = requiredDocsForCustomer.map((docRequirement) => {
      const uploadedDocumentsForCategory = allDocumentsForCustomer.filter(
        (doc) => doc.documentCategory === docRequirement.documentCategory
      );

      return uploadedDocumentsForCategory.length >= docRequirement.minimumUploads;
    });

    return (reqCompletionStatus.filter((status) => status).length / requiredDocsForCustomer.length) * 100;
  }
}
