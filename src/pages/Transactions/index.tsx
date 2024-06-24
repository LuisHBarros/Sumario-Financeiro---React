import React from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";
import { SearchForm } from "./components/SearchForm";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td className="income">R$ 12.000,00</td>
              <td>Venda</td>
              <td className="outcome">13/04/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td className="outcome">-R$ 12.000,00</td>
              <td>Venda</td>
              <td className="outcome">13/04/2024</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td className="income">R$ 12.000,00</td>
              <td>Venda</td>
              <td className="outcome">13/04/2024</td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  );
}
