import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./Hero.module.css";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import { Box, Center } from "@chakra-ui/react";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heading, backgroundImage, ctas } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto("format").url()}")`,
      }
    : {};

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <Box sx={{ bg: "rgba(0,0,0,0.44)", p: 4 }}>
          <h1 className={styles.title}>{heading}</h1>
        </Box>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
