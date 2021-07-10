import { Injectable } from '@angular/core';
import { APPLY_MODULE } from '../../../constants';
import { LegifyApplication, LegifyDocumentRequirement } from '../../../models';
import { ApplicationProgress } from '../../../models/application/application-progress/application-progress';
import { LegifyApplyProgressService } from '../../../services';
import { LegifyDocument } from '../../models';

@Injectable()
export class LegifyApplyDocumentsProgressService extends LegifyApplyProgressService {
  constructor() {
    super();
  }

  public getModuleProgress(application: LegifyApplication): ApplicationProgress {
    return (
      application.progressInfo.find((progressInfo) => progressInfo.forModule === APPLY_MODULE.DOCUMENTS) || {
        forModule: APPLY_MODULE.DOCUMENTS,
        chunks: [],
        totalProgress: 0
      }
    );
  }

  public calculateProgressForPerson(
    allDocumentsForPerson: LegifyDocument[],
    requiredDocsForPerson: LegifyDocumentRequirement[]
  ): number {
    const reqCompletionStatus = requiredDocsForPerson.map((docRequirement) => {
      const uploadedDocCount = allDocumentsForPerson.filter(
        (doc) => doc.documentGroup === docRequirement.documentGroup
      ).length;

      return uploadedDocCount >= docRequirement.minimumUploads;
    });

    return (reqCompletionStatus.filter((status) => status).length / requiredDocsForPerson.length) * 100;
  }
}
