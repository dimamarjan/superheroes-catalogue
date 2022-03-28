import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddFormSection,
  FormContainer,
  AddSuperheroForm,
  NicknameInput,
  RealNameInput,
  DescriptionAria,
  SuperPowerAria,
  CathPhraseInput,
  ImagesContainer,
  ImageList,
  ImageItem,
  Image,
  ImageDownloadLabel,
  ImageDownloadInput,
  FormButton,
  ButtonCoontainer,
  NoticeSection,
  NoticeImages,
} from "./EditForm.style";
import superheroesOperations from "../../redux/slices/superheroes/superheroes-operations";
import superheroesSelectors from "../../redux/slices/superheroes/superheroes-selectors";

export function EditForm() {
  const superheroe = useSelector(superheroesSelectors.superheroesData);
  const isLoadedSuperheroe = useSelector(
    superheroesSelectors.superheroesLodedStatus
  );
  const { id } = useParams();
  const [nickname, setNickname] = useState("");
  const [realName, setRealName] = useState("");
  const [description, setDescription] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [imagesList, setImagesList] = useState([]);
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
    const updatedData = {
      id,
      nickname: nickname,
      real_name: realName,
      origin_description: description,
      superpowers: superPower,
      catch_phrase: catchPhrase,
    };

    dispatch(superheroesOperations.updateDataSuperheroes(updatedData));
    navigate("/");
  };

  const goHomeHeandler = (e) => {
    e.preventDefault();
    dispatch(superheroesOperations.getSuperheroes());
    navigate("/1");
  };

  const onImageChangeHandler = (e) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("old_image", e.target.name);
    formData.append("images[]", e.target.files[0]);

    dispatch(superheroesOperations.updateSuperheroes(formData));
  };

  useEffect(() => {
    if (isLoadedSuperheroe === "idle") {
      dispatch(superheroesOperations.getSuperheroeById(id));
    }
  }, [dispatch, id, isLoadedSuperheroe]);

  useEffect(() => {
    if (isLoadedSuperheroe === "fulfilled") {
      setNickname(superheroe.nickname);
      setRealName(superheroe.real_name);
      setDescription(superheroe.origin_description);
      setSuperPower(superheroe.superpowers);
      setCatchPhrase(superheroe.catch_phrase);
      setImagesList(superheroe.images);
    }
  }, [
    isLoadedSuperheroe,
    superheroe.catch_phrase,
    superheroe.images,
    superheroe.nickname,
    superheroe.origin_description,
    superheroe.real_name,
    superheroe.superpowers,
  ]);

  return (
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
          <ButtonCoontainer>
            <FormButton onClick={onSubmitHandler}>save text changes</FormButton>
            <FormButton onClick={goHomeHeandler}>go home</FormButton>
          </ButtonCoontainer>
          <NoticeSection>
            <NoticeImages>* to change photo - click on it!</NoticeImages>
          </NoticeSection>
          <ImagesContainer>
            <ImageList>
              {imagesList.map((image, index) => (
                <ImageItem key={index}>
                  <ImageDownloadLabel>
                    <ImageDownloadInput
                      type="file"
                      accept="image/jpg"
                      size="2000000"
                      name={image}
                      onChange={onImageChangeHandler}
                    />
                    <Image src={image} />
                  </ImageDownloadLabel>
                </ImageItem>
              ))}
            </ImageList>
          </ImagesContainer>
        </AddSuperheroForm>
      </FormContainer>
    </AddFormSection>
  );
}
