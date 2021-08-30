import { ComponentFactoryResolver, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LazilyRenderedComponent } from '../../models';

@Injectable()
export class ComponentLoaderService {
  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {}

  public addComponentsToContainer<C>(
    container: ViewContainerRef,
    lazilyRenderedComponents: LazilyRenderedComponent[],
    universalComponentPropertyMap?: Record<string, any>
  ): Observable<number> {
    return new Observable<number>((subscriber) => {
      container.clear();

      lazilyRenderedComponents.forEach((lazilyRenderedComponent, componentTypeIndex) => {
        setTimeout(() => {
          this.createComponentWithPropsAndContainer(
            lazilyRenderedComponent.type,
            lazilyRenderedComponent.propMapping,
            container,
            universalComponentPropertyMap
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
    componentContainer: ViewContainerRef,
    universalComponentPropertyMap?: Record<string, any>
  ): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentInstance = componentContainer.createComponent(componentFactory).instance;
    const componentProps = Object.keys(componentPropMap);

    componentProps.forEach((componentProp) => (componentInstance[componentProp] = componentPropMap[componentProp]));

    if (!universalComponentPropertyMap) {
      return;
    }

    const extraComponentProps = Object.keys(universalComponentPropertyMap);
    extraComponentProps.forEach(
      (extraComponentProp) =>
        (componentInstance[extraComponentProp] = universalComponentPropertyMap[extraComponentProp])
    );
  }
}
