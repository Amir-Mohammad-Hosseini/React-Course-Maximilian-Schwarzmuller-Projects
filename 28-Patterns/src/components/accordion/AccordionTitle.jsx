import React from "react";
import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionTitle = ({ className, children }) => {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();
  const handleClick = () => {
    toggleItem(id);
  };
  return (
    <h3 className={className} onClick={handleClick}>
      {children}
    </h3>
  );
};

export default AccordionTitle;
