import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import icons from "../images/jr-icons.png";

const Wrapper = styled.div`
  background: url(${icons}) no-repeat;
  background-size: cover;
  height: 90px;
  width: 90px;
  margin-left: -5px;
`;

const Icon = ({ style = {} }) => {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPos((pos) => {
        return pos > 5 ? 0 : pos + 1;
      });
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Wrapper style={{ backgroundPositionX: pos * -90, ...style }} />;
};

export default Icon;
