import React from "react";
import { render } from "@testing-library/react";

import { Buttons } from "./Buttons.jsx";
import { testIds } from "./../Buttons/testIds";

const exist = (page, selector) => {
  try {
    const element = page.getByTestId(selector);
    return !!element;
  } catch {
    return false;
  }
};

export const createButtonsDriver = () => {
  let _props, _wrapper;
  const driver = {
    given: {
      props: (props) => {
        _props = props;
        return driver;
      },
      showButtons: (show) => {
        _props = {
          ..._props,
          show,
        };
        return driver;
      },
    },
    when: {
      created: () => {
        _wrapper = render(<Buttons {..._props} />);
        return driver;
      },
    },
    then: {
      confirmationWrapperExist: () =>
        exist(_wrapper, testIds.confirmationWrapper),
      wrapperExist: () => exist(_wrapper, testIds.wrapper),
      deleteBtnExist: () => exist(_wrapper, testIds.btnDelete),
      confirmBtnExist: () => exist(_wrapper, testIds.btnConfirm),
      cancelBtnExist: () => exist(_wrapper, testIds.btnCancel),
      iconConfirmButtonExist: () => exist(_wrapper, testIds.iconConfirm),
      iconCancelButtonExist: () => exist(_wrapper, testIds.iconCancel),
    },
  };
  return driver;
};
