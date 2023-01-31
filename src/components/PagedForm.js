import { useMemo, useState } from "react";
import { FormContainer, FormFields, Input, InputWrapper, SubmitButton } from "./common";

export default function PagedForm({ pages = [], onSubmit }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const currentPage = useMemo(() => pages[currentPageIndex], [
    pages,
    currentPageIndex
  ]);

  function nextPage(e) {
    e.preventDefault();
    const moveForward = currentPage.validate();
    if (!moveForward) {
      return;
    }
    setCurrentPageIndex((prevCurrentPage) => prevCurrentPage + 1);
  }

  function prevPage() {
    setCurrentPageIndex((prevCurrentPage) => prevCurrentPage - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const moveForward = currentPage.validate();
    if (!moveForward) {
      return;
    }
    onSubmit();
  }

  return (
    <FormContainer
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={currentPageIndex === pages.length - 1 ? handleSubmit : nextPage}
    >
      <FormFields>
        {currentPage.elements
        .filter(e=>e?.props)
        .map((element) => <InputWrapper style ={{width:`${100/(element.props.width || 2)}%`}}>
          {element}
        </InputWrapper>)}
      </FormFields>
      {currentPageIndex > 0 && (
        <SubmitButton type="button" onClick={prevPage}>
          Back
        </SubmitButton>
      )}
      {currentPageIndex === pages.length - 1 ? (
        <SubmitButton>Submit</SubmitButton>
      ) : (
        <SubmitButton>Next</SubmitButton>
      )}
    </FormContainer>
  );
}
