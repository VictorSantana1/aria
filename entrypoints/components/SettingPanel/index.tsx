import SettingsMenu from "../SettingMenu/SettingsMenu";

type SettingsView = "menu" | "section" | "session" | "setIa";

function SettingsPanel() {
  const [view, setView] = useState<SettingsView>("menu");

  return (
    <>
      {view === "menu" && (
        <SettingsMenu
          changeSettingsMode={(val: string) => setView(val)}
          SettingViewMode={view}
        />
      )}

      {/* {view === "section" && (
        <SectionConfig onBack={() => setView("menu")} />
      )}

      {view === "session" && (
        <SessionConfig onBack={() => setView("menu")} />
      )}

      {view === "setIa" && (
        <SetIaConfig onBack={() => setView("menu")} />
      )} */}
    </>
  );
}
