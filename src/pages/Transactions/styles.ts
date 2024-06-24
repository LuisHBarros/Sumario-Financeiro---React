import { styled } from "styled-components";

interface PriceHighlightProps {
  type: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.theme[`${props.type === "income" ? "green-300" : "red-300"}`]};
`;

export const TransactionsContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 1.5rem;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    th {
      color: ${(props) => props.theme["gray-300"]};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1.25rem 2rem;
      border: 0;
      background-color: ${(props) => props.theme["gray-700"]};
      color: ${(props) => props.theme["white"]};

      &.income {
        color: ${(props) => props.theme["green-300"]};
      }

      &.outcome {
        color: ${(props) => props.theme["red-300"]};
      }

      &:first-child {
        border-radius: 6px 0 0 6px;
      }

      &:last-child {
        border-radius: 0 6px 6px 0;
      }
    }
  }
`;
