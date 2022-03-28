import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CardsSection,
  CardsLisl,
  CardItem,
  CardContainer,
  CardAvatarSection,
  CardAvatarImage,
  CardTitletSection,
  CardTitle,
} from "./SuperheroCard.style.js";
import superheroesSelectors from "../../redux/slices/superheroes/superheroes-selectors";
import superheroesOperations from "../../redux/slices/superheroes/superheroes-operations";

export function SuperheroCard() {
  const dispatch = useDispatch();
  const { page } = useParams();
  const superheroesList = useSelector(superheroesSelectors.superheroesData);
  const isLoadedSuperheroe = useSelector(
    superheroesSelectors.superheroesLodedStatus
  );
  const [isShowCardsList, setIsShowCardsList] = useState(false);
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    if (isLoadedSuperheroe === "idle") {
      dispatch(superheroesOperations.getSuperheroes());
    }
  }, [dispatch, isLoadedSuperheroe]);

  useEffect(() => {
    if (isLoadedSuperheroe === "fulfilled" && superheroesList.length) {
      const dataPerPage = 5 * page;
      setPageList(superheroesList.slice(dataPerPage - 5, dataPerPage));
      setIsShowCardsList(true);
    } else {
      setIsShowCardsList(false);
    }
  }, [isLoadedSuperheroe, page, superheroesList]);

  return (
    <CardsSection>
      <CardsLisl>
        {isShowCardsList &&
          pageList.map((hero) => {
            return (
              <CardItem key={hero.id}>
                <CardContainer>
                  <CardAvatarSection>
                    <CardAvatarImage src={hero.images[0]} />
                  </CardAvatarSection>
                  <CardTitletSection>
                    <CardTitle href={`/info/${hero.id}`}>
                      {hero.nickname}
                    </CardTitle>
                  </CardTitletSection>
                </CardContainer>
              </CardItem>
            );
          })}
      </CardsLisl>
    </CardsSection>
  );
}
