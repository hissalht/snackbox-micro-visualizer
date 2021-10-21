import { useEffect, useMemo, useState } from "react";

import Snackbox from "./Snackbox";
import type { ButtonState } from "./Snackbox";

const DEFAULT_BUTTON_STATE: ButtonState = {
  left: false,
  down: false,
  right: false,
  up: false,
  a: false,
  b: false,
  x: false,
  y: false,
  lb: false,
  rb: false,
  lt: false,
  rt: false,
};

function App() {
  const [buttonState, setButtonState] =
    useState<ButtonState>(DEFAULT_BUTTON_STATE);

  const { buttonColor, caseColor } = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const buttonColor = searchParams.get("buttonColor") || "black";
    const caseColor = searchParams.get("caseColor") || "black";
    return { buttonColor, caseColor };
  }, []);

  useEffect(() => {
    let gamepadIndex: number | null;
    let animationHandle: number | null = null;

    // polling loop
    function pollButtonState() {
      if (gamepadIndex !== null) {
        const gamepad = navigator.getGamepads()[gamepadIndex]!;
        const buttons = gamepad.buttons;
        const newButtonState: ButtonState = {
          a: buttons[0].pressed,
          b: buttons[1].pressed,
          x: buttons[2].pressed,
          y: buttons[3].pressed,
          lb: buttons[7].pressed,
          rb: buttons[5].pressed,
          lt: buttons[6].pressed,
          rt: buttons[4].pressed,

          left: buttons[14].pressed,
          down: buttons[13].pressed,
          right: buttons[15].pressed,
          up: buttons[12].pressed,
        };
        setButtonState(newButtonState);
      }
      animationHandle = requestAnimationFrame(pollButtonState);
    }

    // Start the polling loop when gamepad is connected
    function onGamepadconnected(e: GamepadEvent) {
      console.log("Connected", e.gamepad);
      if (e.gamepad.mapping === "standard") {
        gamepadIndex = e.gamepad.index;
        animationHandle = requestAnimationFrame(pollButtonState);
      }
    }

    window.addEventListener("gamepadconnected", onGamepadconnected);
    return () => {
      if (animationHandle) {
        cancelAnimationFrame(animationHandle);
      }
      window.removeEventListener("gamepadconnected", onGamepadconnected);
    };
  }, []);

  return (
    <Snackbox
      buttonState={buttonState}
      buttonColor={buttonColor}
      caseColor={caseColor}
    />
  );
}

export default App;
