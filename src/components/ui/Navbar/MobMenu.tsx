"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import * as LucideIcons from "lucide-react";
import SubMenuFooter from "./SubMenuFooter";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SubMenuItem {
  name: string;
  desc?: string;
  href: string;
  iconName: keyof typeof import("lucide-react");
  group?: string;
}

interface MenuItem {
  name: string;
  href?: string;
  subMenuHeading?: string[];
  subMenu?: SubMenuItem[];
  gridCols?: 1 | 2 | 3;
  footerText?: string;
  footerLink?: string;
  layout?: "grouped" | "default";
}

interface MobMenuProps {
  Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    setSearchQuery("");
  };

  const getIcon = useCallback((iconName: keyof typeof LucideIcons) => {
    const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;
    return Icon ? <Icon className="h-5 w-5" /> : null;
  }, []);

  const menuAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { type: "spring", damping: 25, stiffness: 200 },
  };

  const subMenuAnimation = {
    enter: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.1 },
      },
    },
  };

  const filteredMenus = Menus.map((menu) => ({
    ...menu,
    subMenu: menu.subMenu?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc?.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(
    (menu) =>
      menu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (menu.subMenu && menu.subMenu.length > 0)
  );
  
  const handleMenuItemClick = () => {
    setIsOpen(false);
    setClicked(null);
    setSearchQuery("");
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden z-[999] relative p-2 hover:bg-white/5 rounded-md transition-colors"
        onClick={toggleDrawer}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-50"
            {...menuAnimation}
          >
            <div className="h-full flex flex-col">
              {/* Search Bar */}
              <div className="p-4 border-b border-border/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                </div>
              </div>

              {/* Menu Content */}
              <nav className="flex-1 overflow-y-auto">
                <ul className="p-4 space-y-2">
                  {filteredMenus.map((menu, i) => {
                    const isClicked = clicked === i;
                    const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;

                    return (
                      <li
                        key={menu.name}
                        className={cn(
                          "rounded-lg overflow-hidden border border-transparent",
                          isClicked && "border-border/10 bg-white/[0.02]"
                        )}
                      >
                        {menu.href && !hasSubMenu ? (
                          <Link
                            href={menu.href}
                            className="flex items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-colors"
                            onClick={handleMenuItemClick} 
                          >
                            <span className="font-medium">{menu.name}</span>
                          </Link>
                        ) : (
                          <button
                            className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-lg transition-colors"
                            onClick={() => setClicked(isClicked ? null : i)}
                            aria-expanded={isClicked}
                          >
                            <span className="font-medium">{menu.name}</span>
                            {hasSubMenu && (
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  isClicked && "rotate-180"
                                )}
                              />
                            )}
                          </button>
                        )}

                        <AnimatePresence>
                          {hasSubMenu && isClicked && (
                            <motion.div
                              initial="exit"
                              animate="enter"
                              exit="exit"
                              variants={subMenuAnimation}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 space-y-1">
                                {menu.subMenu?.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={handleMenuItemClick} 
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                                  >
                                    {item.iconName && (
                                      <div className="p-2 rounded-md bg-primary/10 text-primary">
                                        {getIcon(item.iconName)}
                                      </div>
                                    )}
                                    <div>
                                      <h4 className="font-medium">
                                        {item.name}
                                      </h4>
                                      {item.desc && (
                                        <p className="text-sm text-foreground mt-0.5">
                                          {item.desc}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {menu.footerText && menu.footerLink && (
                                <div className="px-4 pb-4">
                                  <SubMenuFooter
                                    text={menu.footerText}
                                    href={menu.footerLink}
                                    className="rounded-lg"
                                  />
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
