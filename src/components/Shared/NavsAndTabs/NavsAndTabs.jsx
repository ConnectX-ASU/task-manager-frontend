import { useState } from "react";
import styles from "./NavsAndTabs.module.css";

export default function NavAndTabs({
  tabs,
  tabsContent,
  defaultValue,
  id,
  className,
  removeBorders,
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`${className ? className : ""}`}>
      <div
        className={`${styles.tabs} flex overflow-auto ${
          removeBorders ? styles["remove--borders"] : ""
        } ${styles["tabs--rounded"]} rounded-t-[5px] w-fit`}
      >
        {tabs.map((ele) => {
          return (
            <div
              key={`nav-tab-${ele.target}-${id}`}
              onClick={() => setActiveTab(ele.target)}
              className={`px-5 py-3 transition duration-[.3s] cursor-pointer ${
                ele.target === activeTab
                  ? "bg-[var(--main)]"
                  : "bg-[var(--primary)]"
              }`}
            >
              {ele.element}
            </div>
          );
        })}
      </div>
      {tabsContent.map((ele) => {
        if (ele.id !== activeTab) return "";
        return (
          <div
            key={`nav-content-${ele.id}-${id}`}
            className={`bg-[var(--primary)] p-[20px] text-left ${
              !removeBorders ? styles["tab-content--border"] : ""
            }`}
          >
            {ele.element}
          </div>
        );
      })}
    </div>
  );
}
