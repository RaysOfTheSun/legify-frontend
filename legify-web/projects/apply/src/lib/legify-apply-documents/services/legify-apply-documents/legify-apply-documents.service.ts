import { Injectable } from '@angular/core';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../../../models';
import {
  LegifyApplyService,
  LegifyApplyDataService,
  LegifyApplyPersonMapperService
} from '../../../services';
import { LegifyApplyDocumentsConfigService } from '../legify-apply-documents-config/legify-apply-documents-config.service';
import { get } from 'lodash-es';

@Injectable()
export class LegifyApplyDocumentsService {
  constructor(
    protected applyService: LegifyApplyService,
    protected applyDataService: LegifyApplyDataService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {}

  public getAllPersonsThatWillUploadDocuments(): Observable<Person[]> {
    return this.applyService.currApplication$.pipe(
      map((application) => {
        return application
          ? this.applyDataService.getAllInsuredPersonsFromApplication(
              application
            )
          : [];
      })
    );
  }

  public getTaskCardConfigs(): Observable<TaskCardConfig[]> {
    return combineLatest([
      this.applyDocumentsConfigService.taskCardRowConfigs,
      this.getAllPersonsThatWillUploadDocuments()
    ]).pipe(
      map(([taskCardRowConfigs, persons]) => {
        return persons.map((person, i) => {
          return {
            headerText: this.applyPersonMapperService.getPersonName(person),
            subHeaderText: `Person No.${i}`,
            highlightColorKey: get(person, 'role'),
            rows: taskCardRowConfigs
          } as TaskCardConfig;
        });
      })
    );
  }
}
