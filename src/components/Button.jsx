import { Link } from "react-router-dom";
import "./Button.scss";
import { useTranslation } from "react-i18next";
function Button(props) {
  const { t } = useTranslation();
  return (
    <>
      <button className={`button-hover--${props.hoverColor} main-button`}>
        {t(props.title)}
      </button>
    </>
  );
}

export default Button;
