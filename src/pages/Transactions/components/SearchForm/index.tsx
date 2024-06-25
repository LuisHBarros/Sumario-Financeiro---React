import React, { useContext } from "react";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../../../../context/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    mode: "onBlur",
  });

  async function handleSearchTransactions(data: SearchFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetchTransactions(data.query);
    console.log(data);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Pesquisar por título"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={24} />
        Pesquisar
      </button>
    </SearchFormContainer>
  );
}
