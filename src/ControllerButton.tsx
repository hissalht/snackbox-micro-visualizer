import styles from "./ControllerButton.module.css";
import clsx from "clsx";

interface ControllerButtonProps {
  pressed: boolean;
  x: number;
  y: number;
  big?: boolean;
}

export default function ControllerButton(props: ControllerButtonProps) {
  return (
    <circle
      className={clsx(styles.button, { [styles.pressed]: props.pressed })}
      cx={props.x}
      cy={props.y}
      r={props.big ? 24 : 19}
      stroke="white"
      strokeWidth="2"
    />
  );
}
