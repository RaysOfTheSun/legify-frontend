import { LazilyRenderedComponent } from '@legify/web-ui-elements';
import { LazilyRenderedComponentProps } from './lazily-rendered-subform-component-props';

export interface LazilyRenderedSubformComponent extends LazilyRenderedComponent {
  propMapping: LazilyRenderedComponentProps;
}
