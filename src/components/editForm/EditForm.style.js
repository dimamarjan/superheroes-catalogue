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
    margin-bottom: 50px;
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
  width: 1080px;
  margin: 0 auto;
`;

export const AddSuperheroForm = styled.form`
  background-color: ${colors.mainBackground};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin-top: 50px;
  margin-bottom: 50px;
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

export const ImagesContainer = styled.div``;

export const ImageList = styled.ul`
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

export const ImageDownloadLabel = styled.label``;

export const ImageDownloadInput = styled.input`
  display: none;
`;

export const ButtonCoontainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const FormButton = styled.button`
  ${mainStyle.buttonStyle}
  font-size: 15px;

  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const NoticeSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const NoticeImages = styled.p`
  color: ${colors.hederTextColor};
`;
