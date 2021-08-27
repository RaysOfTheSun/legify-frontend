import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LazilyRenderedComponent } from '../../models';

@Injectable()
export class ComponentLoaderService {
  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {}

  public addComponentsToContainer<C>(
    container: ViewContainerRef,
    lazilyRenderedComponents: LazilyRenderedComponent[]
  ): Observable<number> {
    return new Observable<number>((subscriber) => {
      container.clear();

      lazilyRenderedComponents.forEach((lazilyRenderedComponent, componentTypeIndex) => {
        setTimeout(() => {
          this.createComponentWithPropsAndContainer(
            lazilyRenderedComponent.type,
            lazilyRenderedComponent.propMapping,
            container
          );

          const currRenderingProgress = ((componentTypeIndex + 1) / lazilyRenderedComponents.length) * 100;
          subscriber.next(currRenderingProgress);

          if (currRenderingProgress === 100) {
            subscriber.complete();
          }
        });
      });
    });
  }

  protected createComponentWithPropsAndContainer<C = any>(
    componentType: Type<C>,
    componentPropMap: Record<string, any>,
    componentContainer: ViewContainerRef
  ): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentInstance = componentContainer.createComponent(componentFactory).instance;
    const componentProps = Object.keys(componentPropMap);

    componentProps.forEach((componentProp) => (componentInstance[componentProp] = componentPropMap[componentProp]));
  }
}
