import styled from "styled-components";
import Color from "color";

export const ProductWrapper = styled.div`
  background-image: linear-gradient(
    ${(p) => p.theme.deg},
    ${(p) => p.theme.backgroundColor} 0%,
    ${(p) => p.theme.backgroundColorGradient} 100%
  );
  color: ${(p) => p.theme.color};
  padding: 3rem 1rem;
  font-size: 2rem;
`;

const smallCol = 3;
const bigCol = 7;

export const ProductContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: ${(props) =>
    props.flipped ? `${smallCol}fr ${bigCol}fr` : `${bigCol}fr ${smallCol}fr`};
  grid-template-areas: ${(props) =>
    props.flipped ? "'shot desc'" : "'desc shot'"};
`;

ProductContainer.defaultProps = {
  flipped: false,
};

export const Desc = styled.div`
  grid-area: desc;
  p {
    font-size: 1.2rem;
  }
`;

export const Shot = styled.div`
  grid-area: shot;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CTA = styled.a.attrs((p) => {
  const color = Color(p.theme.color);
  return {
    hoverColor: color.isLight()
      ? color.darken(0.15).desaturate(1)
      : color.lighten(0.5),
  };
})`
  display: inline-block;
  margin-top: 1rem;
  background-color: ${(p) => p.theme.color};
  color: ${(p) => p.theme.backgroundColor};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${(p) => p.hoverColor.hex()};
  }
`;
