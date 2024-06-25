import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { API } from "../lib/axios";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  value: number;
  date: string;
}
interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  // createTransaction: (transaction: TransactionInput) => Promise<void>;
}
export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType,
);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await API.get("/transactions", {
      params: {
        q: query,
      },
    });
    setTransactions(response.data);
  }
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, setTransactions }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
}
