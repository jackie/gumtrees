import * as React from "react";
import styled from "styled-components";

let Container = styled.div``;
let Number = styled.div``;
let Image = styled.div``;
let Subtitle = styled.div``;
let Title = styled.div``;
let Description = styled.div``;
let Action = styled.div``;

const Section = ({ number, image, subtitle, title, description, action }) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Image>{image}</Image>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Action>{action}</Action>
    </Container>
  )
}

export default Section