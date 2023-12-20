import clsx from "clsx";

import styles from "./Snackbox.module.css";

import Button from "./ControllerButton";

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
  ls: boolean;
  rs: boolean;
}

interface SnackboxProps {
  className?: string;
  buttonState: ButtonState;
  buttonColor?: string;
  caseColor?: string;
  layout?: "buttons" | "stick" | "tsract";
}

export default function Snackbox({
  className,
  buttonState,
  buttonColor = "black",
  caseColor = "black",
  layout = "buttons",
}: SnackboxProps) {
  const isTsract = layout === "tsract";
  const viewBox = isTsract ? "-20 0 410 211" : "0 0 390 196";
  return (
    <svg
      className={clsx(className)}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        "--snackbox-button-color": buttonColor,
        "--snackbox-case-color": caseColor,
      }}
    >
      <rect
        className={styles.case}
        x={isTsract ? -19 : 1}
        y="1"
        width={isTsract ? 408 : 388}
        height={isTsract ? 208 : 194}
        rx="19"
        stroke="white"
        strokeWidth="2"
      />

      {/* X */}
      <Button x={205} y={62} pressed={buttonState.x} />
      {/* Y */}
      <Button pressed={buttonState.y} x={246} y={38} />
      {/* RB */}
      <Button pressed={buttonState.rb} x={292} y={38} />
      {/* RT */}
      <Button pressed={buttonState.rt} x={338} y={isTsract ? 38 : 53} />
      {/* A */}
      <Button pressed={buttonState.a} x={202} y={109} />
      {/* B */}
      <Button pressed={buttonState.b} x={246} y={86} />
      {/* LB */}
      <Button pressed={buttonState.lb} x={292} y={86} />
      {/* LT */}
      <Button pressed={buttonState.lt} x={338} y={isTsract ? 86 : 100} />

      {layout === "tsract" && (
        <>
          {/* Left stick */}
          <Button pressed={buttonState.ls} x={28} y={59} />

          {/* Right stick */}
          <Button big pressed={buttonState.rs} x={242} y={155} />
        </>
      )}

      {(layout === "buttons" || layout === "tsract") && (
        <>
          {/* Up */}
          <Button big pressed={buttonState.up} x={185} y={164} />
          {/* Right */}
          <Button pressed={buttonState.right} x={163} y={83} />
          {/* Down */}
          <Button pressed={buttonState.down} x={122} y={59} />
          {/* Left */}
          <Button pressed={buttonState.left} x={75} y={59} />
        </>
      )}

      {layout === "stick" && (
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
