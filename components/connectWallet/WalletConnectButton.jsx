import { useWallet } from "@solana/wallet-adapter-react";
import React, { useCallback, useMemo } from "react";
import { Button } from "./Button";

export const WalletConnectButton = ({
  children,
  disabled,
  onClick,
  ...props
}) => {
  const { wallet, connect, connecting, connected } = useWallet();

  const handleClick = useCallback(
    (event) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) connect().catch(() => {});
    },
    [onClick, connect]
  );

  const content = useMemo(() => {
    if (children) return children;
    if (connecting) return "Connecting ...";
    if (connected) return "Connected";
    if (wallet) return "Connect";
    return "Connect Wallet";
  }, [children, connecting, connected, wallet]);

  return (
    <Button
      className={props.className}
      disabled={disabled || !wallet || connecting || connected}
      onClick={handleClick}
      {...props}
    >
      {content}
    </Button>
  );
};
