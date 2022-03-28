import styled from "@emotion/styled";
import { colors } from "../../style/styleConstants";

// style templates

const mainStyle = {
  inputStyle: `
    border-radius: 15px;
    background-color: ${colors.mainBackground};
    color: ${colors.hederTextColor};
    text-align: center;
    padding: 15px;
    margin-bottom: 20px;
`,
  buttonStyle: `
    border-radius: 15px;
    background-color: ${colors.buttonsColor};
    text-transform: uppercase;
    font-weight: 800;
    color: ${colors.hederTextColor};
    border: none;
    padding: 15px;
    margin-bottom: 20px;
    `,
};

// COMPONENTS styled

export const AddFormSection = styled.div`
  width: 100;
`;

export const FormContainer = styled.div`
  width: 900px;
  margin: 0 auto;
`;

export const AddSuperheroForm = styled.form`
  background-color: ${colors.mainBackground};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-top: 50px;
`;

export const NicknameInput = styled.input`
  ${mainStyle.inputStyle}
`;

export const RealNameInput = styled.input`
  ${mainStyle.inputStyle}
  margin-bottom: 50px;
`;

export const DescriptionAria = styled.textarea`
  ${mainStyle.inputStyle}
  resize: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SuperPowerAria = styled.textarea`
  ${mainStyle.inputStyle}
  resize: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CathPhraseInput = styled.textarea`
  ${mainStyle.inputStyle}
  resize: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageDownloadLabel = styled.label`
  ${mainStyle.buttonStyle}
  text-align: center;
`;

export const ImageDownloadInput = styled.input`
  width: 0px;
  height: 0px;
`;

export const SubmitFormButton = styled.button`
  ${mainStyle.buttonStyle}
  font-size: 15px;
`;
