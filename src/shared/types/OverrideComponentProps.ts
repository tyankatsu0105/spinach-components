import * as React from "react";

export interface OverridableComponent<Map extends OverridableTypeMap> {
  <Component extends React.ElementType>(props: DefaultComponentProps<Map> & { component?: Component } & OverrideComponentProps<Map, Component>): JSX.Element;
}

/**
 * `component={Component}`
 */
type OverrideComponentProps<
  Map extends OverridableTypeMap,
  Component extends React.ElementType
> = BaseProps<Map> & Omit<React.ComponentPropsWithRef<Component>, keyof CommonProps>;

/**
 * NOT `component={Component}`
 */
type DefaultComponentProps<Map extends OverridableTypeMap> = BaseProps<Map> & Omit<React.ComponentPropsWithRef<Map["defaultComponent"]>, keyof BaseProps<Map>>;

type BaseProps<Map extends OverridableTypeMap> = Map["props"] & CommonProps;

interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
}

interface OverridableTypeMap {
  defaultComponent: React.ElementType;
  props: {};
}

export type TypeMap<DefaultComponent extends React.ElementType, Props = {}> = {
  defaultComponent: DefaultComponent,
  props: Props,
}


