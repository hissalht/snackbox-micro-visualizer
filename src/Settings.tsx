import { ChangeEvent } from "react";
import styles from "./Settings.module.css";

export interface ColorSettings {
  buttonColor: string;
  caseColor: string;
  directionDisplay: "buttons" | "stick";
}

interface SettingsProps {
  settings: ColorSettings;
  onChange: (value: ColorSettings) => void;
}

export default function Settings({ settings, onChange }: SettingsProps) {
  const handleChange =
    (key: keyof ColorSettings) => (e: ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...settings,
        [key]: e.target.value,
      });
    };

  return (
    <div className={styles.settings}>
      <div className={styles.field}>
        <label htmlFor="button-color">Button color</label>
        <input
          id="button-color"
          type="color"
          value={settings.buttonColor}
          onChange={handleChange("buttonColor")}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="case-color">Case color</label>
        <input
          id="case-color"
          type="color"
          value={settings.caseColor}
          onChange={handleChange("caseColor")}
        />
      </div>

      <fieldset>
        <legend>Direction display</legend>
        <div className={styles.field}>
          <div>
            <input
              id="direction-display-buttons"
              type="radio"
              name="direction-display"
              value="buttons"
              onChange={handleChange("directionDisplay")}
              checked={settings.directionDisplay === "buttons"}
            />
            <label htmlFor="direction-display-buttons">Buttons</label>
          </div>

          <div>
            <input
              id="direction-display-stick"
              type="radio"
              name="direction-display"
              value="stick"
              onChange={handleChange("directionDisplay")}
              checked={settings.directionDisplay === "stick"}
            />
            <label htmlFor="direction-display-stick">Stick</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
