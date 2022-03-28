import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AddFormSection,
  FormContainer,
  AddSuperheroForm,
  NicknameInput,
  RealNameInput,
  DescriptionAria,
  SuperPowerAria,
  CathPhraseInput,
  ImageDownloadLabel,
  ImageDownloadInput,
  SubmitFormButton,
} from "./AddForm.style.js";
import superheroesOperations from "../../redux/slices/superheroes/superheroes-operations";

export function AddForm() {
  const [filesCounter, setFilesCounter] = useState(0);
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [description, setDescription] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDataChangeHandler = (e) => {
    switch (e.target.name) {
      case "NICKNAME":
        setNickname(e.target.value);
        return;
      case "REAL NAME":
        setRealName(e.target.value);
        return;
      case "DESCRIPTION":
        setDescription(e.target.value);
        return;
      case "SUPER POWER":
        setSuperPower(e.target.value);
        return;
      case "CATCH PHRASE":
        setCatchPhrase(e.target.value);
        return;
      default:
        return;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.dir(e.target.previousElementSibling.children[0].files);
    formData.append("nickname", nickname);
    formData.append("real_name", realName);
    formData.append("origin_description", description);
    formData.append("superpowers", superPower);
    formData.append("catch_phrase", catchPhrase);
    for (
      let i = 0;
      i < e.target.previousElementSibling.children[0].files.length;
      i++
    ) {
      formData.append(
        "images[]",
        e.target.previousElementSibling.children[0].files[i]
      );
    }
    dispatch(superheroesOperations.addSuperheroes(formData));
    navigate("/");
  };

  const onUploadFilesHandler = (e) => {
    setFilesCounter(e.target.files.length);
  };

  return (
    <div>
      <AddFormSection>
        <FormContainer>
          <AddSuperheroForm>
            <NicknameInput
              name="NICKNAME"
              placeholder="NICKNAME"
              value={nickname}
              onChange={onDataChangeHandler}
              minlength="1"
            />
            <RealNameInput
              name="REAL NAME"
              placeholder="REAL NAME"
              value={realName}
              onChange={onDataChangeHandler}
            />
            <DescriptionAria
              name="DESCRIPTION"
              placeholder="DESCRIPTION"
              value={description}
              onChange={onDataChangeHandler}
            />
            <SuperPowerAria
              name="SUPER POWER"
              placeholder="SUPER POWER"
              value={superPower}
              onChange={onDataChangeHandler}
            />
            <CathPhraseInput
              name="CATCH PHRASE"
              placeholder="CATCH PHRASE"
              value={catchPhrase}
              onChange={onDataChangeHandler}
            />
            <ImageDownloadLabel>
              upload images ({filesCounter} images uploaded)
              <ImageDownloadInput
                type="file"
                accept="image/jpg"
                size="2000000"
                multiple
                onInput={onUploadFilesHandler}
              />
            </ImageDownloadLabel>
            <SubmitFormButton onClick={onSubmitHandler}>
              add superhero
            </SubmitFormButton>
          </AddSuperheroForm>
        </FormContainer>
      </AddFormSection>
    </div>
  );
}
