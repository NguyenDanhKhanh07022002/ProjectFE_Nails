import "./OpenningHour.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function OpenningHour() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
                  <td>Po - Pá</td>
                  <td>-</td>
                  <td className="text-end">8:30 - 19:30</td>
                </tr>
                <tr>
                  <td>So</td>
                  <td>-</td>
                  <td className="text-end">9:30 - 18:00</td>
                </tr>
                <tr className="last-tr">
                  <td>Ne</td>
                  <td>-</td>
                  <td className="text-end">na tel. objednávku</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="open-hour-wrapper--title" data-aos="fade-left">
            <h3>Otevírací doba</h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default OpenningHour;
