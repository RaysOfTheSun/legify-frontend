export interface LazilyRenderedComponent<P = any, C = any> {
  type: C;
  propMapping: P;
}
