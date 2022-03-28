import { useNavigate } from "react-router-dom";
import {
  MainHeaderSection,
  MainHeader,
  HeaderContainer,
  AddHeroeButton,
  TitleHeader,
} from "./Header.style";

export function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <MainHeaderSection>
        <MainHeader>
          <HeaderContainer>
            <AddHeroeButton onClick={() => navigate("/add")}>
              Add Superheroe
            </AddHeroeButton>
            <TitleHeader href="/">Superheroes database</TitleHeader>
          </HeaderContainer>
        </MainHeader>
      </MainHeaderSection>
    </div>
  );
}
