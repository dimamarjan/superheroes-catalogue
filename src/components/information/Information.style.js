import styled from "@emotion/styled";
import { colors } from "../../style/styleConstants";

export const InformationSection = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const InformationContainer = styled.div`
  width: 980px;
  margin: 50px auto 0 auto;
  padding: 50px;
  border-radius: 15px;
  background-color: ${colors.mainBackground};
`;

export const InformationTitle = styled.p`
  margin: 0;
  text-align: center;

  text-transform: uppercase;
  font-size: 36px;
  font-weight: 800;
  font-style: italic;
  color: ${colors.hederTextColor};
`;

export const TextContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: fit-content;
`;

export const TextList = styled.ul``;

export const TextItem = styled.li``;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemTitle = styled.p`
  margin-right: 50px;

  text-transform: uppercase;
  font-weight: 600;
  color: ${colors.hederTextColor};

  ::after {
    content: ":";
  }
`;

export const ItemText = styled.p`
  text-transform: capitalize;
  font-style: italic;
  color: ${colors.hederTextColor};
`;

export const ImagesContainer = styled.div``;

export const ImageList = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  max-width: 980px;
  border-radius: 15px;
  box-shadow: 0 0 5px ${colors.hederTextColor};
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const OperationButton = styled.button`
  border-radius: 15px;
  border: none;
  background-color: ${colors.buttonsColor};
  color: ${colors.hederTextColor};
  padding: 15px;
  margin-top: 20px;

  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
