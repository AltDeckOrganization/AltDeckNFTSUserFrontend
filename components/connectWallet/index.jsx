import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useWalletModal, WalletIcon } from "@solana/wallet-adapter-react-ui";

import { WalletConnectButton } from "./WalletConnectButton";
import { WalletModalButton } from "./WalletModalButton";
import { Button } from "./Button";

import { useWallet } from "@solana/wallet-adapter-react";

export const ConnectWallet = ({ children, onClickMobile, ...props }) => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const content = useMemo(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + ".." + base58.slice(-4);
  }, [children, wallet, base58]);

  const copyAddress = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [base58]);

  const openDropdown = useCallback(() => setActive(true), [setActive]);

  const closeDropdown = useCallback(() => setActive(false), [setActive]);

  const openModal = useCallback(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);

  useEffect(() => {
    const listener = (event) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target)) return;

      closeDropdown();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, closeDropdown]);

  if (!wallet)
    return <WalletModalButton {...props}>{children}</WalletModalButton>;
  if (!base58)
    return <WalletConnectButton {...props}>{children}</WalletConnectButton>;

  return (
    <div className="wallet-adapter-dropdown">
      <Button
        aria-expanded={active}
        style={{ pointerEvents: active ? "none" : "auto", ...props.style }}
        onClick={openDropdown}
        {...props}
      >
        {content}
      </Button>
      <ul
        aria-label="dropdown-list"
        className={`wallet-adapter-dropdown-list ${
          active && "wallet-adapter-dropdown-list-active"
        }`}
        ref={ref}
        role="menu"
      >
        <li
          onClick={() => {
            copyAddress();
            onClickMobile && onClickMobile();
          }}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          {copied ? "Copied" : "Copy address"}
        </li>
        <li
          onClick={() => {
            openModal();
            onClickMobile && onClickMobile();
          }}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Connect a different wallet
        </li>
        <li
          onClick={() => {
            disconnect();
            onClickMobile && onClickMobile();
          }}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Disconnect
        </li>
      </ul>
    </div>
  );
};
