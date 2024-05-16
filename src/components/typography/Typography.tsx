type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

type TypographyProps<T extends React.ElementType> = PolymorphicProps<T> & {
  color?: string;
};

export const Typography = <T extends React.ElementType = "p">({
  as,
  color,
  ...props
}: TypographyProps<T>) => {
  const Component = as || "p";

  return <Component {...props} />;
};
