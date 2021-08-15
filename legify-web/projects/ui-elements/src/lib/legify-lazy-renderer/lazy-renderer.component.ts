import { Component, InjectionToken, Injector, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { ComponentLoaderService } from './services';
import { set } from 'lodash-es';
import { BehaviorSubject, Observable } from 'rxjs';

export const FORM_DATA = new InjectionToken('form');

@Component({
  selector: 'legify-web-lazy-renderer',
  templateUrl: './lazy-renderer.component.html',
  styleUrls: ['./lazy-renderer.component.scss']
})
export class LazyRendererComponent implements OnInit {
  @Input() components: Type<any>[];
  @Input() showProgress: boolean;
  @Input() componentPropertyValueMap: Record<string, any>;

  // TODO: transfer to form lazy renderer
  @Input() form: FormGroup;

  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  protected contentContainerRef: ViewContainerRef;
  protected renderingProgressSubj: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(protected componentLoaderService: ComponentLoaderService) {}

  ngOnInit(): void {
    const componentPropMapping = {
      parentFormGroup: this.form
    };

    this.componentLoaderService
      .addComponentsToContainer(this.components, this.contentContainerRef, componentPropMapping)
      .subscribe((renderingProgress) => this.renderingProgressSubj.next(renderingProgress));
  }

  get componentRenderingProgress$(): Observable<number> {
    return this.renderingProgressSubj.asObservable();
  }

  get isStillRendering$(): Observable<boolean> {
    return this.componentRenderingProgress$.pipe(map((progress) => progress !== 100));
  }
}
