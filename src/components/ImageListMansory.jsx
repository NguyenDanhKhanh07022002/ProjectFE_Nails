import "./ImageListMansory.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import AOS from "aos";
import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageGalerie1 from "../assets/galerie/changeNails3.jfif";
import ImageGalerie2 from "../assets/galerie/changeNails8.jfif";
import ImageGalerie3 from "../assets/galerie/eyelashes.jpeg";
import ImageGalerie4 from "../assets/galerie/massage2.jpg";
import ImageGalerie5 from "../assets/galerie/eyelashes.jpg";
import ImageGalerie6 from "../assets/galerie/nail-foot2.jpg";
import ImageGalerie7 from "../assets/galerie/nails.jpg";
import ImageGalerie8 from "../assets/galerie/massage.jfif";
import ImageGalerie9 from "../assets/galerie/changeNails5.jfif";
import ImageGalerie10 from "../assets/galerie/eyelashes1.jpg";
<<<<<<< Updated upstream
import ImageGalerie11 from "../assets/galerie/changeNails6.jfif";
import ImageGalerie12 from "../assets/galerie/changeNails7.jfif";
=======
import ImageGalerie11 from "../assets/galerie/nail-foot1.jpg";
// import ImageGalerie12 from "../assets/galerie/galerie-14-nehty.jpg";
>>>>>>> Stashed changes
import ImageGalerie13 from "../assets/galerie/massage1.jpg";
import { useTranslation } from "react-i18next";

function ImageListMansory() {
  const { t } = useTranslation();
  const itemData = [
    {
      img: ImageGalerie1,
      title: "Bed",
    },
    {
      img: ImageGalerie2,
      title: "Books",
    },
    {
      img: ImageGalerie3,
      title: "Sink",
    },
    {
      img: ImageGalerie4,
      title: "Kitchen",
    },
    {
      img: ImageGalerie5,
      title: "Blinds",
    },
    {
      img: ImageGalerie6,
      title: "Chairs",
    },
    {
      img: ImageGalerie7,
      title: "Laptop",
    },
    {
      img: ImageGalerie8,
      title: "Doors",
    },
    {
      img: ImageGalerie9,
      title: "Coffee",
    },
    {
      img: ImageGalerie10,
      title: "Storage",
    },
    {
      img: ImageGalerie11,
      title: "Candle",
    },
    {
      img: ImageGalerie13,
      title: "Coffee table",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="service-offer-title" data-aos="fade-up">
        <span className="service-offer-title-section">{t("GalleryTitle")}</span>
        <h2>{t("Gallery")}</h2>
      </div>
      <div data-aos="fade-up">
        <Box sx={{ width: "55%", margin: "auto" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </>
  );
}

export default ImageListMansory;
