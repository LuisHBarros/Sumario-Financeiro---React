import React from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Pesquisar por título" />
      <button type="submit">
        <MagnifyingGlass size={24} />
        Pesquisar
      </button>
    </SearchFormContainer>
  );
}
