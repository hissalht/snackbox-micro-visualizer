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
      />

      {/* X */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.x })}>
        <circle cx="205" cy="62" r="19" />
        <text
          x="205"
          y="62"
          fill="#66ceff"
          textAnchor="middle"
          dominantBaseline="central"
        >
          K
        </text>
      </g>

      {/* Y */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.y })}>
        <circle cx="246" cy="38" r="19" />
        <text
          x="246"
          y="38"
          fill="#36e79d"
          textAnchor="middle"
          dominantBaseline="central"
        >
          S
        </text>
      </g>

      {/* RB */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.rb })}>
        <circle cx="292" cy="38" r="19" />
        <text
          x="292"
          y="38"
          fill="#f43030"
          textAnchor="middle"
          dominantBaseline="central"
        >
          HS
        </text>
      </g>

      {/* RT */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.rt })}>
        <circle cx="338" cy="53" r="19" />
      </g>

      {/* A */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.a })}>
        <circle cx="202" cy="109" r="19" />
        <text
          x="202"
          y="109"
          fill="#ff8eff"
          textAnchor="middle"
          dominantBaseline="central"
        >
          P
        </text>
      </g>

      {/* B */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.b })}>
        <circle cx="246" cy="86" r="19" />
      </g>

      {/* LB */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.lb })}>
        <circle cx="292" cy="86" r="19" />
        <text
          x="292"
          y="86"
          fill="#f89630"
          textAnchor="middle"
          dominantBaseline="central"
        >
          D
        </text>
      </g>

      {/* LT */}
      <g className={clsx(styles.button, { [styles.pressed]: buttonState.lt })}>
        <circle cx="338" cy="100" r="19" />
      </g>

      {directionDisplay === "buttons" && (
        <>
          <g
            // Up
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.up,
            })}
          >
            <circle cx="185" cy="164" r="24" />
          </g>

          <g
            // Right
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.right,
            })}
          >
            <circle cx="163" cy="83" r="19" />
          </g>

          <g
            // Down
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.down,
            })}
          >
            <circle cx="122" cy="59" r="19" />
          </g>

          <g
            // Left
            className={clsx(styles.button, {
              [styles.pressed]: buttonState.left,
            })}
          >
            <circle cx="75" cy="59" r="19" />
          </g>
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
