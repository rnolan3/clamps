import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import List from "../components/list";
import { Description } from "../components/description";
import Icon from "../components/icon";
import Section from "../components/section";

// styles
const pageStyles = {
  color: "#102342",
  fontFamily: "Baskervville, sans-serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  transform: "rotate(180deg)",
  position: "relative",
  display: "inline-block",
};

// data
const links = [
  {
    text: "Rooster",
    url: "https://www.roosterstl.com/",
    description:
      "Great brunch spot that's only a couple blocks from the hotel.",
    color: "#E95800",
  },
  {
    text: "Arch Grounds",
    url: "https://www.archpark.org/",
    description: "Visit what defines the St. Louis skyline.",
    color: "#1099A8",
  },
  {
    text: "Schlafly Taproom",
    url: "https://www.schlafly.com/tap-room-brewpub/",
    description: `The oldest craft brewery in St. Louis. The Tap Room offers a wonderful lunch and dinner menu set in an old printing factory.`,
    color: "#BC027F",
  },
  {
    text: "Forest Park",
    url: "https://www.slam.org/",
    description:
      'Considered the "Heart of St. Louis". Enjoy the historic architecture, museums, and gardens.',
    color: "#0D96F2",
  },
  {
    text: "4 Hands Brewing",
    url: "https://4handsbrewery.com",
    description: "Grab a beer and play some Skee-Ball",
    color: "#8EB814",
  },
];

const accommodations = [
  {
    text: "The Last Hotel STL",
    url: "http://hotels.cloudbeds.com/reservation/FJ9mpn?allotment_block_code=b065967#checkin=2022-04-30&checkout=2022-05-01",
    color: "#000",
    description: (
      <>
        This hotel is steps from the Reception location. Rooftop Pool, free
        WiFi. Group code: b065967.
      </>
    ),
  },
];

const cityMuseum = [
  {
    text: "Dress code",
    description:
      "Adventure Elegant or George Washington Casual. Bring knee pads.",
  },
  {
    text: "Parking",
    description:
      "Secure parking is available at the City Museum on N 16th street. Free street parking.",
  },
  {
    text: "Mask policy",
    description: `As of Feb 20, 2022, The City Museum requires all guests to wear masks
    when entering and in public spaces.`,
  },
];

const ButtonTo = styled.a`
  background: ${(prop: { primary?: boolean }) =>
    prop.primary ? "#102342" : "transparent"};
  border: 1px solid #102342;
  color: ${(prop: { primary?: boolean }) =>
    prop.primary ? "#fff" : "#102342"};
  padding: 0.75em 1em;
  display: inline-block;
  text-decoration: none;
  border-radius: 2px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 468px) {
    padding: 0.4em 1em;
    font-size: 0.8em;
  }
`;

const ButtonRow = styled.p`
  display: grid;
  grid-gap: 1em;
  margin-top: 3em;
  margin-bottom: 6em;

  @media screen and (min-width: 468px) {
    margin-top: 0;
    grid-gap: 0.5em;
    display: inline-grid;
    font-size: 24px;
    padding-top: 10%;
    grid-auto-flow: column;
  }
`;

const GlobalStyles = createGlobalStyle`
  
  html {
    background: #29D396;
    background: #f9f9f9;
    font-size: 20px;
    padding: 10%;
    padding-top: 1em;

    @media screen and (min-width: 468px) {
      font-size: 24px;
      padding-top: 10%;
    }
  }

  a {
    color: #102342;
    text-decoration: none;
  }

  h1 {
    font-size: 1em;
    text-decoration: none;
  }

  p {
    font-weight: unset;
    line-height: 1.25;
    padding-top: 0;
  }

`;

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <GlobalStyles />
      <title>Jane + Robert</title>
      <script src="https://unpkg.com/phosphor-icons"></script>
      <Section>
        <h1>
          <Icon />
        </h1>
        <br />
        <h1
          style={{
            ...headingStyles,
            border: "1px solid #102342",
            borderRadius: "2px",
            borderTopWidth: 3,
            padding: ".05em .5em",
            display: "inline-block",
          }}
        >
          J+R
        </h1>
      </Section>

      <Section>
        <p>
          Jane M. Spikowski + Robert W. Nolan III are getting married on
          Saturday, April 30th 2022.
        </p>
        <p>We'd love for you to join us on our special day.</p>
        <Description>
          <strong>Ceremony — 3pm</strong>
          <br />
          Elizabeth Cook Pavilion
          <br />
          <a href="https://goo.gl/maps/CjDG8oacmZFJViRr8" target="_blank">
            2023 Lafayette Ave, St. Louis, MO 63104
          </a>
        </Description>
        <Description>
          <strong>Reception — 6pm</strong>
          <br />
          City Museum, Architecture Hall
          <br />
          <a href="https://goo.gl/maps/eZ89drdc7WutLAuQ6" target="_blank">
            750 N 16th St, St. Louis, MO 63103
          </a>
        </Description>
        <ButtonRow>
          <ButtonTo
            href="https://s83i16ioh4y.typeform.com/to/zAT4xnb4"
            target="_blank"
            primary
          >
            RSVP
          </ButtonTo>

          <ButtonTo
            href="https://www.paypal.com/donate/?business=TFRRFEZPAQJZC&no_recurring=1&item_name=Help+us+fund+our+tour+of+Europe.&currency_code=USD"
            target="_blank"
          >
            Honeymoon Fund
          </ButtonTo>
        </ButtonRow>
      </Section>
      <List items={cityMuseum} title="City Museum Details" />
      <List items={accommodations} title="Accommodations" />
      <List items={links} title="Things to do near the hotel" />

      <h1
        style={{
          ...headingStyles,
          transform: "rotate(0deg)",
          border: "1px solid #102342",
          borderRadius: "2px",
          borderTopWidth: 3,
          padding: ".05em .5em",
          display: "inline-block",
        }}
      >
        J+R
      </h1>
      <Icon style={{ transform: "rotate(180deg)", marginLeft: -20 }} />
    </main>
  );
};

export default IndexPage;
