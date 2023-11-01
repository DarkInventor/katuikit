"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Popup Modal
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Menubar
        </Link>
        <Link
          href={`docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Image
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Card
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
