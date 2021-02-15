import { OverridableComponent, TypeMap } from './OverridableComponent';

type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

type FeatureBaseProps<
  Key extends IntrinsicElementsKeys,
  Others = {}
> = JSX.IntrinsicElements[Key] & Others;

export type SpinachComponent<
  Key extends IntrinsicElementsKeys,
  Others = {}
> = OverridableComponent<TypeMap<Key, FeatureBaseProps<Key, Others>>>;
