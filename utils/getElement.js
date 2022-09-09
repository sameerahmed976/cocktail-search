const getElement = (selection) => {
  if (selection) {
    return document.querySelector(selection);
  }

  throw new Error(`Please select correct element ${selection}`);
};

export { getElement };
