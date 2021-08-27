import { ButtonPropsType, ButtonTypes } from "./ButtonTypes";

export type ButtonDriverE2ETypes = {
  click: () => Promise<void>;
  confirmBtnClick: () => Promise<void>;
  clickWithConfirm: () => Promise<void>;
};

export type ButtonDriverSpecTypes = {
  given: {
    props: (props: ButtonPropsType) => ButtonDriverSpecTypes;
    withConfirm: (withConfirm: boolean) => ButtonDriverSpecTypes;
    text: (text: string) => ButtonDriverSpecTypes;
    type: (type: ButtonTypes) => ButtonDriverSpecTypes;
    click: (onClick: () => void) => ButtonDriverSpecTypes;
  };
  when: {
    created: () => ButtonDriverSpecTypes;
    btnClick: () => ButtonDriverSpecTypes;
    confirmBtnClick: () => ButtonDriverSpecTypes;
    cancelBtnClick: () => ButtonDriverSpecTypes;
  };
  then: {
    confirmationWrapperExist: () => boolean;
    btnType: () => string;
    isBtnDisabled: () => boolean | null;
  };
};
