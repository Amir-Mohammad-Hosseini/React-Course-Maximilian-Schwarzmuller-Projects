import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "AccordionItem components must be wrapped by <AccordionItem>",
    );
  }
  return ctx;
};

const AccordionItem = ({ id, children, className }) => {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
