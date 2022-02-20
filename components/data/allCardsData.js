import { cardData } from "./cardData";
export const allCardsData = [
  {
    heading: "Upcoming Launches",
    rowData: cardData,
  },
  {
    heading: "Top Collections this month",
    rowData: cardData,
  },
  {
    heading: "Collections on Sale",
    rowData: [...cardData, ...cardData],
  },
  {
    heading: "Featured Collections",
    rowData: [...cardData, ...cardData],
  },
  {
    heading: "New Collections",
    rowData: [...cardData, ...cardData, ...cardData, ...cardData, ...cardData],
  },
];
