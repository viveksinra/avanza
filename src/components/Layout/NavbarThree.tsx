"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import SidebarModal from "../SidebarModal/SidebarModal";

const NavbarThree: React.FC = () => {
  // Sidebar Modal
  const [sidebarModal, setSidebarModal] = useState<boolean>(false);
  const toggleModal = (): void => {
    setSidebarModal(!sidebarModal);
  };

  // Search Form
  const [searchForm, setSearchForm] = useState<boolean>(false);
  const handleSearchForm = (): void => {
    setSearchForm((prevState) => !prevState);
  };

  // Navbar
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const toggleNavbar = (): void => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classOne: string = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo: string = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div
        id="navbar"
        className="navbar-area navbar-area-with-position-relative"
      >
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={164}
                  height={58}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
              </div>

              <div className="others-options">
           
                <div className="burger-menu" onClick={toggleModal}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Right Sidebar Modal */}
      <SidebarModal
        onClick={toggleModal}
        active={sidebarModal ? "active" : ""}
      />
    </>
  );
};

export default NavbarThree;
