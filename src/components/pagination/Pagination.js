import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  PaginationContainer,
  PaginationSection,
  ArrowButton,
  PaginationList,
  PaginationItem,
  PaginationButton,
  ArrowLIcon,
  ArrowRIcon,
} from "./Pagination.style";

import superheroesSelectors from "../../redux/slices/superheroes/superheroes-selectors";

export function Pagination() {
  const { page } = useParams();
  const navigate = useNavigate();
  const superheroesList = useSelector(superheroesSelectors.superheroesData);
  const isLoadedSuperheroes = useSelector(
    superheroesSelectors.superheroesLodedStatus
  );

  const [paginatedPageList, setPaginatedPageList] = useState([]);
  const [isShoPaginationList, setIsShoPaginationList] = useState(false);
  const [isShowArrowL, setIsShowArrowL] = useState(false);
  const [isShowArrowR, setIsShowArrowR] = useState(false);

  const goPage = useCallback(
    (targetPage) => navigate(`/${targetPage}`),
    [navigate]
  );

  const pageList = useCallback(
    (pageNumber, dataList) => {
      if (pageNumber < 1) {
        return goPage(1);
      }
      if (Math.ceil(dataList.length / 5) === 0) {
        setPaginatedPageList([]);
      }
      if (
        Math.ceil(dataList.length / 5) < 5 &&
        pageNumber <= Math.ceil(dataList.length / 5)
      ) {
        let tempPageLis = [];
        for (let i = 1; i <= Math.ceil(dataList.length / 5); i++) {
          tempPageLis.push(i);
        }
        setPaginatedPageList(tempPageLis);
        return goPage(pageNumber);
      }
      if (pageNumber <= 2 && Math.ceil(dataList.length / 5) >= 5) {
        setPaginatedPageList([1, 2, 3, 4, 5]);
        return goPage(pageNumber);
      }
      if (
        pageNumber > 2 &&
        pageNumber < Math.ceil(dataList.length / 5) - 2 &&
        Math.ceil(dataList.length / 5) >= 5
      ) {
        setPaginatedPageList([
          parseInt(pageNumber) - 2,
          parseInt(pageNumber) - 1,
          parseInt(pageNumber),
          parseInt(pageNumber) + 1,
          parseInt(pageNumber) + 2,
        ]);
        return goPage(pageNumber);
      }
      if (pageNumber >= Math.ceil(dataList.length / 5) - 2) {
        setPaginatedPageList([
          Math.ceil(dataList.length / 5) - 4,
          Math.ceil(dataList.length / 5) - 3,
          Math.ceil(dataList.length / 5) - 2,
          Math.ceil(dataList.length / 5) - 1,
          Math.ceil(dataList.length / 5),
        ]);
        if (pageNumber > Math.ceil(dataList.length / 5)) {
          return goPage(Math.ceil(dataList.length / 5));
        }
        return goPage(pageNumber);
      }
    },
    [goPage]
  );

  const onButtonHandler = (e) => {
    if (e.target.name !== page) {
      pageList(e.target.name, superheroesList);
      goPage(e.target.name);
    }
  };

  const onArrowHandler = (e) => {
    let target = e.target.name;
    if (!e.target.name) {
      if (e.target.nodeName === "svg") {
        target = e.target.parentNode.name;
      }
      if (e.target.nodeName === "path") {
        target = e.target.parentNode.parentNode.name;
      }
    }
    if (target === "arrowLeft") {
      if (page > 1) {
        goPage(parseInt(page) - 1);
        if (paginatedPageList[2] > 3) {
          const newPageList = paginatedPageList.map((page) => page - 1);
          return setPaginatedPageList(newPageList);
        }
      }
      return;
    }
    if (target === "arrowRight") {
      if (parseInt(page) + 1 < Math.ceil(superheroesList.length / 5) - 1) {
        const newPageList = paginatedPageList.map((page) => page + 1);
        goPage(parseInt(page) + 1);
        return setPaginatedPageList(newPageList);
      }
      if (parseInt(page) + 1 <= Math.ceil(superheroesList.length / 5)) {
        goPage(parseInt(page) + 1);
      }
      return;
    }
  };

  const currentPage = (pageNumber) => {
    if (pageNumber === parseInt(page)) {
      return "current";
    }
    return "";
  };

  useEffect(() => {
    if (isLoadedSuperheroes === "fulfilled" && superheroesList.length) {
      pageList(page, superheroesList);
      setIsShoPaginationList(true);
    } else {
      setIsShoPaginationList(false);
      setIsShowArrowL(false);
      setIsShowArrowR(false);
    }
  }, [isLoadedSuperheroes, page, pageList, superheroesList]);

  useEffect(() => {
    if (parseInt(page) <= 1) {
      setIsShowArrowL(false);
    } else {
      setIsShowArrowL(true);
    }
    if (
      parseInt(page) === Math.ceil(superheroesList.length / 5) ||
      !superheroesList.length
    ) {
      setIsShowArrowR(false);
    } else {
      setIsShowArrowR(true);
    }
  }, [page, setIsShowArrowL, setIsShowArrowR, superheroesList.length]);

  return (
    <PaginationContainer>
      <PaginationSection>
        {isShowArrowL && (
          <ArrowButton onClick={onArrowHandler} name="arrowLeft">
            <ArrowLIcon />
          </ArrowButton>
        )}
        {isShoPaginationList && (
          <PaginationList>
            {paginatedPageList.map((page) => {
              return (
                <PaginationItem key={page}>
                  <PaginationButton
                    className={currentPage(page).trim()}
                    onClick={onButtonHandler}
                    name={page}
                  >
                    {page}
                  </PaginationButton>
                </PaginationItem>
              );
            })}
          </PaginationList>
        )}
        {isShowArrowR && (
          <ArrowButton onClick={onArrowHandler} name="arrowRight">
            <ArrowRIcon />
          </ArrowButton>
        )}
      </PaginationSection>
    </PaginationContainer>
  );
}
