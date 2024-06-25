import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { TransactionContext } from "../../context/TransactionsContext";
import { formatDate } from "date-fns";

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  const transactionsInOrder = transactions.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <table>
          <tbody>
            {transactionsInOrder.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td
                    className={transaction.type}
                  >{` ${transaction.type === "outcome" ? "- " : ""} R$ ${transaction.value}`}</td>
                  <td>{transaction.category}</td>
                  <td>
                    {formatDate(
                      new Date(transaction.date),
                      " dd/MM/yyyy - HH:mm ",
                    )}
                  </td>
                </tr>
              );
            })}
            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>
      </TransactionsContainer>
    </div>
  );
}
