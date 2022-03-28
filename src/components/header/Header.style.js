import styled from "@emotion/styled";
import { colors } from "../../style/styleConstants";

export const MainHeaderSection = styled.header`
  width: 100%;
  background-color: ${colors.headerBackgroundColor};
`;

export const MainHeader = styled.div`
  width: 1080px;
  margin: 0 auto;
  height: 100px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const AddHeroeButton = styled.button`
  height: fit-content;

  padding: 15px;
  border-radius: 10px;
  border: none;

  color: ${colors.hederTextColor};
  font-weight: 800;
  text-transform: uppercase;

  background-color: ${colors.buttonsColor};
`;

export const TitleHeader = styled.a`
  margin-right: 265px;

  color: ${colors.hederTextColor};
  font-weight: 700;
  font-size: 32px;
  font-style: italic;
  text-transform: uppercase;
  text-decoration: none;

  position: relative;

  &::before {
    content: "";
    display: flex;
    position: absolute;
    right: -265px;
    width: 420px;
    height: 5px;
    background-color: ${colors.hederTextColor};
  }

  &::after {
    content: "";
    display: flex;
    position: absolute;
    left: -200px;
    width: 420px;
    height: 5px;
    background-color: ${colors.hederTextColor};
  }
`;
