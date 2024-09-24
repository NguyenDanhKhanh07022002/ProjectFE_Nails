import "./ImageListMansory.scss";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageGalerie1 from "../assets/galerie/nails1.jpg"
import ImageGalerie2 from "../assets/galerie/nail-foot.png"
import ImageGalerie3 from "../assets/galerie/eyelashes.jpeg"
import ImageGalerie4 from "../assets/galerie/massage2.jpg"
import ImageGalerie5 from "../assets/galerie/eyelashes.jpg"
import ImageGalerie6 from "../assets/galerie/nail-foot2.jpg"
import ImageGalerie7 from "../assets/galerie/galerie-09-nehty.jpg"
import ImageGalerie8 from "../assets/galerie/massage4.jpg"
import ImageGalerie9 from "../assets/galerie/galerie-11-nehty.jpg"
import ImageGalerie10 from "../assets/galerie/eyelashes1.jpg"
import ImageGalerie11 from "../assets/galerie/nail-foot1.jpg"
import ImageGalerie12 from "../assets/galerie/galerie-14-nehty.jpg"
import ImageGalerie13 from "../assets/galerie/massage1.jpg"

function ImageListMansory() {
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
    {
      img: ImageGalerie12,
      title: "Store",
    },

  ];
  return (
    <>
      <div className="service-offer-title">
        <span className="service-offer-title-section">Služby</span>
        <h2>Nabízíme</h2>
      </div>
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
    </>
  );
}

export default ImageListMansory;
