import React, { useContext } from "react";
import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { TransactionContext } from "../../context/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.value;
      } else {
        acc.outcome += transaction.value;
      }

      acc.total = acc.income - acc.outcome;

      return acc;
    },
    {
      income: 0,
      outcome: 0,

      total: 0,
    },
  );

  const total = summary.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const income = summary.income.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const outcome = summary.outcome.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{income}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{outcome}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
