import { ArrowRight } from "phosphor-react";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Description } from "./description";
import Section from "./section";

export interface Item {
  text: string;
  url: string;
  description: ReactNode;
  color?: string;
}

interface Props {
  title: ReactNode;
  items: Item[];
}

const List: FC<Props> = (props) => {
  return (
    <Section style={{ maxWidth: "100%" }}>
      <h1>{props.title}</h1>
      <UL>
        {props.items.map((link) => (
          <li key={link.url}>
            <a href={`${link.url}`} target="_blank">
              {link.text}
            </a>
            <Description>{link.description}</Description>

            <Visit href={`${link.url}`} target="_blank" color={link.color}>
              Visit website
              <i className="ph-arrow-right" />
            </Visit>
          </li>
        ))}
      </UL>
    </Section>
  );
};

const Visit = styled.a`
  color: rgba(16, 35, 66, 0.7);
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    border-bottom: 2px solid ${(prop) => prop.color};
    display: block;
    width: 100%;
    opacity: 0.25;
    transition: opacity 100ms;
  }

  &:hover {
    color: ${(prop) => prop.color};

    &:after {
      opacity: 1;
    }
  }
`;

const UL = styled.ul`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(auto, 550px));
  list-style: none;
  margin-bottom: 96px;
  padding-left: 0px;

  a {
    display: inline-block;
    margin-bottom: 0.5em;
    margin-bottom: 0;
    font-size: 0.8em;
  }

  p {
    margin-top: 0;
  }
`;

export default List;
