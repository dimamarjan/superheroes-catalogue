import styled from "@emotion/styled";
import { colors } from "../../style/styleConstants";

export const CardsSection = styled.div`
  width: 1080px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const CardsLisl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 0 0 0;
`;

export const CardItem = styled.li`
  width: 480px;
  min-height: 600px;
  margin-bottom: 50px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;

  background-color: ${colors.mainBackground};
  box-shadow: 0 0 50px ${colors.buttonsColor};
`;

export const CardAvatarSection = styled.div`
  position: relative;
  height: 420px;
  width: 380px;
  margin-top: 50px;

  border-radius: 15px;
  box-shadow: 0 0 5px ${colors.hederTextColor};

  overflow: hidden;
`;

export const CardAvatarImage = styled.img`
  position: absolute;
  height: 100%;
  left: -50%;
`;

export const CardTitletSection = styled.div`
  display: flex;
  justify-content: center;
  width: 380px;
  margin-top: 25px;
  height: fit-content;
  padding-bottom: 50px;

  text-transform: uppercase;

  overflow: hidden;
`;

export const CardTitle = styled.a`
  color: ${colors.hederTextColor};

  font-weight: 800;
  font-style: italic;
  font-size: 36px;
  text-decoration: none;
`;
