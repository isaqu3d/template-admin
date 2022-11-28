type TitleProps = {
  title: string;
  subtitle: string;
};

export function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="">{props.title}</h1>
      <h2 className="">{props.subtitle}</h2>
    </div>
  );
}