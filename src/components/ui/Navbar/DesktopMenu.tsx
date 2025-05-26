"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import SubMenuFooter from "./SubMenuFooter";

interface SubMenuItem {
  name: string;
  desc: string;
  iconName?: keyof typeof import("lucide-react");
  group?: string;
  href: string;
}

interface MenuItem {
  name: string;
  gridCols?: 1 | 2 | 3;
  subMenu?: SubMenuItem[];
  subMenuHeading?: string[];
  href?: string;
  layout?: "grouped" | "default";
  footerText?: string;
  footerLink?: string;
}

interface DesktopMenuProps {
  menu: MenuItem;
}

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.5 },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: { duration: 0.5 },
    transitionEnd: { display: "none" },
  },
} as const;

export default function DesktopMenu({ menu }: DesktopMenuProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMenuItemClick = () => {
    setIsHover(false);
  };

  const hasSubMenu = React.useMemo(
    () => menu?.subMenu && menu?.subMenu?.length > 0,
    [menu?.subMenu]
  );

  const getIcon = React.useCallback(
    (iconName: keyof typeof LucideIcons | undefined) => {
      if (!iconName) return null;
      const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;
      return Icon ? <Icon /> : null;
    },
    []
  );

  const groupedSubMenus = React.useMemo(() => {
    if (!menu.subMenu || menu.layout !== "grouped") return null;

    return menu.subMenu.reduce((acc, item) => {
      const group = item.group || "default";
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {} as Record<string, SubMenuItem[]>);
  }, [menu.subMenu, menu.layout]);

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      key={menu.name}
    >
      {!hasSubMenu && menu.href ? (
        <Link href={menu.href}>
          <span className="flex items-center text-xs xl:text-base gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
            {menu.name}
          </span>
        </Link>
      ) : (
        <span className="flex items-center text-xs xl:text-base gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
          {menu.name}
          {hasSubMenu && (
            <ChevronDown
              className="mt-[0.6px] group-hover/link:rotate-180 duration-200 size-5"
              aria-hidden="true"
            />
          )}
        </span>
      )}

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          role="menu"
          aria-label={`${menu.name} submenu`}
        >
          {menu.layout === "grouped" &&
          groupedSubMenus &&
          menu.subMenuHeading ? (
            <>
              <div className="grid grid-cols-2 gap-8">
                {menu.subMenuHeading.map((heading, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="relative text-sm font-medium tracking-wide uppercase before:absolute before:left-0 before:-bottom-2 before:w-8 before:h-[2px] before:bg-primary/60 after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-[0.5px] after:bg-primary/30 text-foreground/80">
                      {heading}
                    </h3>
                    <div className="space-y-4 pt-2">
                      {groupedSubMenus[heading]?.map((submenu) => (
                        <Link
                          href={submenu.href || "#"}
                          key={submenu.name}
                          onClick={handleMenuItemClick}
                          className="flex items-center gap-4 p-3 transition-colors"
                        >
                          {submenu.iconName && (
                            <div className="p-2 rounded-md bg-indigo-200 w-fit">
                              {getIcon(submenu.iconName)}
                            </div>
                          )}
                          <div>
                            <h4 className="font-medium">{submenu.name}</h4>
                            <p className="text-sm text-foreground/80">
                              {submenu.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {menu.footerText && menu.footerLink && (
                <SubMenuFooter
                  text={menu.footerText}
                  href={menu.footerLink}
                  className="mt-6"
                />
              )}
            </>
          ) : (
            <>
              <div
                className={cn(
                  "grid gap-7",
                  menu.gridCols === 3 && "grid-cols-3",
                  menu.gridCols === 2 && "grid-cols-2",
                  (!menu.gridCols || menu.gridCols === 1) && "grid-cols-1"
                )}
              >
                {menu.subMenu?.map((submenu, i) => (
                  <Link
                    href={submenu.href || "#"}
                    key={`${menu.name}-submenu-${i}`}
                    onClick={handleMenuItemClick}
                    className="relative cursor-pointer"
                  >
                    {menu.gridCols &&
                      menu.gridCols > 1 &&
                      menu?.subMenuHeading?.[i] && (
                        <p className="relative text-sm mb-3 font-medium tracking-wide uppercase before:absolute before:left-0 before:-bottom-2 before:w-8 before:h-[2px] before:bg-primary/60 after:absolute after:left-0 after:-bottom-2 after:w-16 after:h-[0.5px] after:bg-primary/30 text-foreground/80">
                          {menu.subMenuHeading[i]}
                        </p>
                      )}
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                      {submenu.iconName && (
                        <div className="p-2 rounded-md bg-indigo-200 w-fit">
                          {getIcon(submenu.iconName)}
                        </div>
                      )}
                      <div>
                        <h6 className="font-medium">{submenu.name}</h6>
                        <p className="text-sm text-foreground/80">
                          {submenu.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {menu.footerText && menu.footerLink && (
                <SubMenuFooter
                  text={menu.footerText}
                  href={menu.footerLink}
                  className="mt-6"
                />
              )}
            </>
          )}
        </motion.div>
      )}
    </motion.li>
  );
}
