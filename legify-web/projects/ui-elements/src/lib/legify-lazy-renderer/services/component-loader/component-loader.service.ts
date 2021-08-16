import { ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';
import { set } from 'lodash-es';

@Injectable()
export class ComponentLoaderService {
  constructor(protected componentFactoryResolver: ComponentFactoryResolver) {}

  public addComponentsToContainer<C>(
    components: Type<C>[],
    containerRef: ViewContainerRef,
    componentPropMapping: Record<string, any>
  ): Observable<number> {
    return new Observable<number>((subscriber) => {
      containerRef.clear();

      components.forEach((componenType, componentTypeIndex) => {
        setTimeout(() => {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componenType);
          const componentRef = containerRef.createComponent(componentFactory);
          Object.keys(componentPropMapping).forEach(
            (prop) => (componentRef.instance[prop] = componentPropMapping[prop])
          );

          const progress = ((componentTypeIndex + 1) / components.length) * 100;
          subscriber.next(progress);

          if (progress === 100) {
            subscriber.complete();
          }
        });
      });
    });
  }

  public addComponentsToContainerV1<C>(
    components: Type<C>[],
    containerRef: ViewContainerRef,
    componentPropMapping: Record<string, any>
  ): Observable<number> {
    containerRef.clear();

    const addComponents$ = of(...components).pipe(
      delay(0.1),
      map((componentType) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const componentRef = containerRef.createComponent(componentFactory);
        Object.keys(componentPropMapping).forEach((prop) =>
          set(componentRef.instance, prop, componentPropMapping[prop])
        );

        return componentRef;
      })
    );

    return addComponents$.pipe(map((_, componentTypeIndex) => ((componentTypeIndex + 1) / components.length) * 100));
  }
}
