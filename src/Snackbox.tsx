import clsx from "clsx";

import styles from "./Snackbox.module.css";

export interface ButtonState {
  left: boolean;
  down: boolean;
  right: boolean;
  up: boolean;
  a: boolean;
  b: boolean;
  x: boolean;
  y: boolean;
  lb: boolean;
  rb: boolean;
  lt: boolean;
  rt: boolean;
}

interface SnackboxProps {
  className?: string;
  buttonState: ButtonState;
}

export default function Snackbox({ className, buttonState }: SnackboxProps) {
  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 390 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="388"
        height="194"
        rx="19"
        fill="black"
        stroke="white"
        strokeWidth="2"
      />

      {/* Up */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.up })}
        cx="185"
        cy="164"
        r="24"
        stroke="white"
        strokeWidth="2"
      />

      {/* X */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.x })}
        cx="205"
        cy="62"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* Y */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.y })}
        cx="246"
        cy="38"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* RB */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.rb })}
        cx="292"
        cy="38"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* RT */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.rt })}
        cx="338"
        cy="53"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* A */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.a })}
        cx="202"
        cy="109"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* B */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.b })}
        cx="246"
        cy="86"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* LB */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.lb })}
        cx="292"
        cy="86"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* LT */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.lt })}
        cx="338"
        cy="100"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* Right */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.right })}
        cx="163"
        cy="83"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* Down */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.down })}
        cx="122"
        cy="59"
        r="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* Left */}
      <circle
        className={clsx(styles.button, { [styles.pressed]: buttonState.left })}
        cx="75"
        cy="59"
        r="19"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
