import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  InformationSection,
  InformationContainer,
  InformationTitle,
  TextContainer,
  TextList,
  TextItem,
  ItemContainer,
  ItemTitle,
  ItemText,
  ImagesContainer,
  ImageList,
  ImageItem,
  Image,
  ButtonSection,
  OperationButton,
} from "./Information.style";
import superheroesOperations from "../../redux/slices/superheroes/superheroes-operations";
import superheroesSelectors from "../../redux/slices/superheroes/superheroes-selectors";

export function Information() {
  const superheroes = useSelector(superheroesSelectors.superheroesData);
  const isLoadedSuperheroe = useSelector(
    superheroesSelectors.superheroesLodedStatus
  );
  const [imagesList, setImagesList] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onEditHandler = () => {
    navigate(`/edit/${id}`);
  };

  const onDeleteHandler = () => {
    dispatch(superheroesOperations.delSuperheroe(id));
    navigate("/");
  };

  useEffect(() => {
    if (isLoadedSuperheroe === "idle") {
      dispatch(superheroesOperations.getSuperheroeById(id));
    }
  }, [dispatch, id, isLoadedSuperheroe]);

  useEffect(() => {
    if (isLoadedSuperheroe === "fulfilled") {
      setImagesList(superheroes.images);
    }
  }, [isLoadedSuperheroe, superheroes.images]);

  return (
    <InformationSection>
      <InformationContainer>
        <InformationTitle>{superheroes.nickname}</InformationTitle>
        <TextContainer>
          <TextList>
            <TextItem>
              <ItemContainer>
                <ItemTitle>real name</ItemTitle>
                <ItemText>{superheroes.real_name}</ItemText>
              </ItemContainer>
              <ItemContainer>
                <ItemTitle>descriprion</ItemTitle>
                <ItemText>{superheroes.origin_description}</ItemText>
              </ItemContainer>
              <ItemContainer>
                <ItemTitle>superpowers</ItemTitle>
                <ItemText>{superheroes.superpowers}</ItemText>
              </ItemContainer>
              <ItemContainer>
                <ItemTitle>catch phrase</ItemTitle>
                <ItemText>{superheroes.catch_phrase}</ItemText>
              </ItemContainer>
            </TextItem>
          </TextList>
        </TextContainer>
        <ImagesContainer>
          <ImageList>
            {imagesList.map((image, index) => (
              <ImageItem key={index}>
                <Image src={image} />
              </ImageItem>
            ))}
          </ImageList>
        </ImagesContainer>
        <ButtonSection>
          <OperationButton onClick={onEditHandler}>edit</OperationButton>
          <OperationButton onClick={onDeleteHandler}>delete</OperationButton>
        </ButtonSection>
      </InformationContainer>
    </InformationSection>
  );
}
