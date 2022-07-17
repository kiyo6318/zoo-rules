import { Container, Stage } from "@inlet/react-pixi";
import { Children, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Pixi: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Stage width={500} height={500}>
      {children}
    </Stage>
  );
};
