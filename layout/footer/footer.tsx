import { CiGlobe } from "react-icons/ci";
import { FiChevronUp, FiDollarSign } from "react-icons/fi";

import Link from "next/link";
import React, { Fragment } from "react";

const footerLinks = [
  { title: "privacy", link: "/privacy" },
  { title: "terms", link: "/terms" },
  { title: "about us", link: "/about" },
];

export function Footer() {
  return (
    <div className="fixed sm:relative w-full bottom-0 bg-white border-t px-3 z-[100]">
      <div className="flex sm:flex-col max-w-6xl mx-auto  items-center py-[12px] justify-between">
        <div className="flex sm:flex-col items-center">
          <p className="text-[14px] font-semibold text-gray-600  capitalize">
            &copy; 2023 Hotels&Co, inc
          </p>
          <div className="flex sm:my-4 items-center ml-4">
            {footerLinks.map((link, index, array) => {
              return (
                <Fragment key={index}>
                  <Link
                    href={link.link}
                    key={index}
                    className="mx-3 flex items-center"
                  >
                    <span className="text-[14px] capitalize font-semibold text-gray-600 ">
                      {link.title}
                    </span>
                  </Link>

                  {index !== array.length - 1 && (
                    <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex items-center ">
          <a className="flex items-center mx-3" href="">
            <CiGlobe
              size={14}
              className="mr-2 sm:text-gray-500 text-gray-600 "
            />
            <span className="text-[14px] capitalize font-semibold  text-gray-600">
              english(US)
            </span>
          </a>
          <a className="flex items-center  mx-3" href="">
            <FiDollarSign size={14} className="mr-1 text-gray-600 " />
            <span className="text-[14px] capitalize  font-semibold text-gray-600 ">
              USD
            </span>
          </a>
          <a className="flex items-center mx-3" href="">
            <span className="text-[14px] truncate capitalize font-semibold text-gray-600 ">
              Support & resources
            </span>
            <FiChevronUp size={18} className="ml-1 text-gray-600 " />
          </a>
        </div>
      </div>
    </div>
  );
}
