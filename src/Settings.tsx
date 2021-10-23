import { ChangeEvent } from "react";
import styles from "./Settings.module.css";

export interface ColorSettings {
  buttonColor: string;
  caseColor: string;
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
    </div>
  );
}
