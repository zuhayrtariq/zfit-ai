"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { User, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLogo from "./NavLogo";
import { usePathname } from "next/navigation";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Generate",
      link: "/generate-program",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const clerk = useClerk();
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* <NavbarLogo /> */}
          <NavLogo />
          {isLoaded && (
            <>
              {isSignedIn ? (
                <>
                  <NavItems items={navItems} />
                  <div className="flex items-center gap-4">
                    <UserButton />
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <NavbarButton
                    variant="secondary"
                    onClick={() => {
                      clerk.openSignUp();
                    }}
                  >
                    Sign up
                  </NavbarButton>
                  <NavbarButton
                    variant="primary"
                    onClick={() => {
                      clerk.openSignIn();
                    }}
                  >
                    Login
                  </NavbarButton>
                </div>
              )}
              {/* <div className="flex items-center gap-4">
                <NavbarButton
                  variant="secondary"
                  onClick={() => {
                    clerk.openSignUp();
                  }}
                >
                  Sign up
                </NavbarButton>
                <NavbarButton
                  variant="primary"
                  onClick={() => {
                    clerk.openSignIn();
                  }}
                >
                  Login
                </NavbarButton>
              </div> */}
            </>
          )}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            {isLoaded && (
              <>
                {isSignedIn ? (
                  <div className="flex items-center gap-2">
                    <MobileNavToggle
                      isOpen={isMobileMenuOpen}
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                    <UserButton />
                  </div>
                ) : (
                  <NavbarButton
                    variant="primary"
                    onClick={() => {
                      clerk.openSignIn();
                    }}
                  >
                    Login
                  </NavbarButton>
                )}
              </>
            )}
          </MobileNavHeader>
          {isSignedIn && (
            <MobileNavMenu
              className="bg-background text-foreground"
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative ${pathName === item.link && "text-primary"} `}
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              {/* <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  clerk.openSignUp();
                }}
                variant="primary"
                className="w-full"
              >
                Sign up
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  clerk.openSignIn();
                }}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
            </div> */}
            </MobileNavMenu>
          )}
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
