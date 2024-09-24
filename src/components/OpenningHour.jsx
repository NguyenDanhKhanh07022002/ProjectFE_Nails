import "./OpenningHour.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";

function OpenningHour() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div id="widget-container">
        <section className="open-hour-wrapper">
          <div className="open-hour-wrapper--schedule" data-aos="fade-right">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    {t("Days.Monday")} - {t("Days.Friday")}
                  </td>
                  <td>-</td>
                  <td className="text-end">8:30 - 19:30</td>
                </tr>
                <tr>
                  <td>{t("Days.Saturday")}</td>
                  <td>-</td>
                  <td className="text-end">9:30 - 18:00</td>
                </tr>
                <tr className="last-tr">
                  <td>Ne</td>
                  <td>-</td>
                  <td className="text-end">{t("TelOrder")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="open-hour-wrapper--title" data-aos="fade-left">
            <h3>{t("OpeningHours")}</h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default OpenningHour;
