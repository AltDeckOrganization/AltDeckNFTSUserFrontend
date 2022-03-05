import React, { useCallback } from "react";
import { Button, ButtonProps } from "./Button";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export const WalletModalButton = ({
  children = "Connect",
  onClick,
  ...props
}) => {
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(
    (event) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) setVisible(!visible);
    },
    [onClick, setVisible, visible]
  );

  return (
    <Button className={props.className} onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};
