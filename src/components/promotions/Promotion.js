import { Box, Slide } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const message = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store",
];

const Promotion = () => {
    const containerRef = useRef();
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % message.length);

      // slide the message in
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3500);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromotionsContainer ref={containerRef} >
      <Slide container={containerRef.current} direction={show ? "left" : "right"} in={show}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{message[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
};

export default Promotion;
