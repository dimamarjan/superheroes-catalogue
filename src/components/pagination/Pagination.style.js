import styled from "@emotion/styled";
import { colors } from "../../style/styleConstants";
import { ReactComponent as ArrowLeftIcon } from "../../images/arr-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arr-right.svg";

export const PaginationContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const PaginationSection = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 15px;
`;

export const PaginationList = styled.ul`
  display: flex;
  margin: 0 10px 0 10px;
`;

export const PaginationItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const PaginationButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${colors.mainBackground};
  color: ${colors.hederTextColor};
  border: none;
  border-radius: 15px;

  &.current {
    background-color: ${colors.buttonsColor};
  }
`;

export const ArrowLIcon = styled(ArrowLeftIcon)`
  height: 24px;
  width: 12px;
  stroke: ${colors.buttonsColor};
`;

export const ArrowRIcon = styled(ArrowRightIcon)`
  height: 24px;
  width: 12px;
  stroke: ${colors.buttonsColor};
`;
