import { ChangeEvent } from "react";
import styles from "./Settings.module.css";

export interface ColorSettings {
  buttonColor: string;
  caseColor: string;
  layout: "buttons" | "stick" | "tsract";
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
        <legend>Layout</legend>
        <div className={styles.field}>
          <div>
            <input
              id="layout-buttons"
              type="radio"
              name="layout"
              value="buttons"
              onChange={handleChange("layout")}
              checked={settings.layout === "buttons"}
            />
            <label htmlFor="layout-buttons">Buttons</label>
          </div>

          <div>
            <input
              id="layout-stick"
              type="radio"
              name="layout"
              value="stick"
              onChange={handleChange("layout")}
              checked={settings.layout === "stick"}
            />
            <label htmlFor="layout-stick">Stick</label>
          </div>

          <div>
            <input
              id="layout-tsract"
              type="radio"
              name="layout"
              value="tsract"
              onChange={handleChange("layout")}
              checked={settings.layout === "tsract"}
            />
            <label htmlFor="layout-tsract">TSR:ACT</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
