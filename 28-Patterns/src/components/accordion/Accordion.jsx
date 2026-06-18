import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext({
  openItemId: undefined,
  toggleItem : () => {},
});

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>",
    );
  }

  return ctx;
};

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(prevId => prevId === id  ? null : id);
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };
  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle
Accordion.Content = AccordionContent

export default Accordion;
