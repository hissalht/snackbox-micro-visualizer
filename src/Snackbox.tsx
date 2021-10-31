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
  buttonColor?: string;
  caseColor?: string;
  directionDisplay?: "buttons" | "stick";
}

export default function Snackbox({
  className,
  buttonState,
  buttonColor = "black",
  caseColor = "black",
  directionDisplay = "buttons",
}: SnackboxProps) {
  return (
    <svg
      className={clsx(className)}
      viewBox="0 0 390 196"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        "--snackbox-button-color": buttonColor,
        "--snackbox-case-color": caseColor,
      }}
    >
      <rect
        className={styles.case}
        x="1"
        y="1"
        width="388"
        height="194"
        rx="19"
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

      {directionDisplay === "buttons" && (
        <>
          <circle
            // Up
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.up,
            })}
            cx="185"
            cy="164"
            r="24"
            stroke="white"
            strokeWidth="2"
          />

          <circle
            // Right
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.right,
            })}
            cx="163"
            cy="83"
            r="19"
            stroke="white"
            strokeWidth="2"
          />

          <circle
            // Down
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.down,
            })}
            cx="122"
            cy="59"
            r="19"
            stroke="white"
            strokeWidth="2"
          />

          <circle
            // Left
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.left,
            })}
            cx="75"
            cy="59"
            r="19"
            stroke="white"
            strokeWidth="2"
          />
        </>
      )}

      {directionDisplay === "stick" && (
        <>
          {/* Stick hole */}
          <circle cx="103" cy="91" r="10.4482" fill="#393939" />

          {/* Stick ball */}
          <circle
            className={clsx(styles.stickBall, {
              [styles.left]: buttonState.left,
              [styles.right]: buttonState.right,
              [styles.down]: buttonState.down,
              [styles.up]: buttonState.up,
            })}
            r="18"
            cx="103"
            cy="91"
            fill="white"
          />
        </>
      )}
    </svg>
  );
}
