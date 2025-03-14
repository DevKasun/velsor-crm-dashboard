import React from "react";
import settingsIcon from "../../assets/icons/settings.svg";
import bellIcon from "../../assets/icons/bell.svg";
import avatar from "../../assets/avatar.svg";
import Button from "../button";

export default function Navbar() {
  return (
    <header className="px-4 h-16 border-b-[1px] border-solid border-[#3E3E3E]">
      <nav className="container min-w-full flex items-center justify-between">
        <div></div>

        <menu className="flex items-center gap-4">
          <Button to="/">Overview</Button>
          <Button to="/">Performance</Button>
          <Button to="/">Activity</Button>
          <Button to="/">Deals</Button>
        </menu>
        <menu className="flex items-center gap-4">
          <Button isIconButton={true} to="/" className="w-[48px] h-[48px]">
            <img src={settingsIcon} alt="settings_icon" />
          </Button>
          <Button isIconButton={true} to="/" className="w-[48px] h-[48px]">
            <img src={bellIcon} alt="bell_icon" />
          </Button>
          <Button isIconButton={true} to="/" className="w-[48px] h-[48px]">
            <img src={avatar} alt="avatar" />
          </Button>
        </menu>
      </nav>
    </header>
  );
}
