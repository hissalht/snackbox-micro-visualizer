import { useEffect, useState } from "react";

import Snackbox from "./Snackbox";
import type { ButtonState } from "./Snackbox";
import Settings from "./Settings";
import type { ColorSettings } from "./Settings";

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
  ls: false,
  rs: false,
};

const DEFAULT_SETTINGS: ColorSettings = {
  buttonColor: "black",
  caseColor: "black",
  directionDisplay: "buttons",
};

function App() {
  const [settings, setSettings] = useState<ColorSettings>(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const buttonColor =
      searchParams.get("buttonColor") || DEFAULT_SETTINGS.buttonColor;

    const caseColor =
      searchParams.get("caseColor") || DEFAULT_SETTINGS.caseColor;

    let directionDisplay = searchParams.get("directionDisplay");
    if (!directionDisplay || !["buttons", "stick"].includes(directionDisplay)) {
      directionDisplay = DEFAULT_SETTINGS.directionDisplay;
    }

    return {
      buttonColor,
      caseColor,
      directionDisplay: directionDisplay as "buttons" | "stick",
    };
  });

  const [buttonState, setButtonState] =
    useState<ButtonState>(DEFAULT_BUTTON_STATE);

  const handleSettingsChange = (value: ColorSettings) => {
    setSettings(value);

    const searchParams = new URLSearchParams();
    searchParams.set("buttonColor", value.buttonColor);
    searchParams.set("caseColor", value.caseColor);
    searchParams.set("directionDisplay", value.directionDisplay);
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, "", `/?${searchParams.toString()}`);
  };

  useEffect(() => {
    let gamepadIndex: number | null;
    let animationHandle: number | null = null;

    // polling loop
    function pollButtonState() {
      if (gamepadIndex !== null) {
        const gamepad = navigator.getGamepads()[gamepadIndex]!;
        const buttons = gamepad.buttons;
        console.log(JSON.stringify(buttons.map((button) => button.pressed)));
        const newButtonState: ButtonState = {
          a: buttons[0].pressed,
          b: buttons[1].pressed,
          x: buttons[2].pressed,
          y: buttons[3].pressed,
          lb: buttons[7].pressed,
          rb: buttons[5].pressed,
          lt: buttons[6].pressed,
          rt: buttons[4].pressed,

          ls: buttons[10].pressed,
          rs: buttons[11].pressed,

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
    <>
      <Settings settings={settings} onChange={handleSettingsChange} />
      <Snackbox
        buttonState={buttonState}
        buttonColor={settings.buttonColor}
        caseColor={settings.caseColor}
        directionDisplay={settings.directionDisplay}
      />
    </>
  );
}

export default App;
