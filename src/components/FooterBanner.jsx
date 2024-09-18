import "./FooterBanner.scss";
import Button from "./Button";
function FooterBanner(props) {
  return (
    <>
      <div id="widget-container">
        <section
          id="banner-1"
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <div>
            <div>
              <div>
                <div className="banner-1-txt text-center white--color">
                  <h5 className="h5-xl">
                    Nejpohodlnější způsob objednání do studia:
                  </h5>
                  <h3>Zarezervujte si </h3>
                  <h2>termín</h2>
                  <a href="/rezervace/">
                    <Button hoverColor="white" title="Rezervovat návštěvu" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FooterBanner;
