import { Component, InjectionToken, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { ComponentLoaderService } from './services';
import { BehaviorSubject, Observable } from 'rxjs';
import { LazilyRenderedComponent } from './models';

@Component({
  selector: 'legify-web-lazy-renderer',
  templateUrl: './lazy-renderer.component.html',
  styleUrls: ['./lazy-renderer.component.scss']
})
export class LazyRendererComponent implements OnInit {
  @Input() components: LazilyRenderedComponent[];
  @Input() loadingText: string;
  @Input() showRenderingProgress: boolean;
  @Input() componentPropertyValueMap: Record<string, any>;

  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  protected contentContainerRef: ViewContainerRef;
  protected renderingProgressSubj: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(protected componentLoaderService: ComponentLoaderService) {}

  ngOnInit(): void {
    this.componentLoaderService
      .addComponentsToContainer(this.contentContainerRef, this.components)
      .subscribe((renderingProgress) => this.renderingProgressSubj.next(renderingProgress));
  }

  get componentRenderingProgress$(): Observable<number> {
    return this.renderingProgressSubj.asObservable();
  }

  get isStillRendering$(): Observable<boolean> {
    return this.componentRenderingProgress$.pipe(map((progress) => progress !== 100));
  }
}
