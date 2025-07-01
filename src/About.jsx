import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("about.intro")}</p>
      <p>
        <b>{t("about.keySkills")}</b>
        <ul>
          <li>{t("about.skills.fullstack")}</li>
          <li>{t("about.skills.cloud")}</li>
          <li>{t("about.skills.backend")}</li>
          <li>{t("about.skills.team")}</li>
          <li>{t("about.skills.success")}</li>
        </ul>
      </p>
    </>
  );
}
