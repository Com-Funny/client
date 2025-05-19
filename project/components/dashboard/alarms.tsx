"use client";

import {
  faAngleRight,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCallback, useState } from "react";
import dayjs from "dayjs";

interface AlarmsProps {
  list: Alarm[];
}

interface Alarm {
  id: number;
  name: string;
  type: string;
  status: string;
  timestamp: string;
}

export default function Alarms({ list }: AlarmsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const getTimeFormat = useCallback((timestamp: string) => {
    return dayjs(timestamp).format("YYYY.MM.DD hh:mm");
  }, []);

  return (
    <div
      className={`shrink-0 flex flex-col items-between justify-start w-full px-4 py-3 gap-2 bg-card shadow-default rounded-2xl transition-all duration-400 ease-in-out overflow-hidden`}
      style={
        isOpen ? { height: list.length * 40 + 96 + "px" } : { height: "62px" }
      }
    >
      <div
        className="flex items-center justify-between w-full h-12 hover:opacity-80 transition-transform duration-300 ease-in-out cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center justify-start h-full gap-4">
          <div className="relative w-8 h-full flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBell}
              className="w-full !h-10 animate-ring"
              color="#ff7070"
            />
            <span className="absolute right-0 top-0 bg-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold text-foreground">
              {list.length}
            </span>
          </div>
          <p className="text-lg font-semibold">{list[0].name}</p>
        </div>

        <FontAwesomeIcon
          icon={faCaretDown}
          className={`!w-5 !h-10 transition-transform ease-in-out duration-400 ${
            isOpen ? "rotate-180" : ""
          }`}
          color="#8c8c8c"
        />
      </div>

      <ul className="w-full flex flex-col items-start justify-center">
        {list.map((alarm) => (
          <li
            className="w-full h-10 hover:opacity-80 transition-transform duration-300 ease-in-out cursor-pointer"
            key={`alarm_item_${alarm.id}`}
          >
            <Link
              href={`/${alarm.type}/${alarm.id}`}
              className="flex items-center justify-between w-full h-full"
            >
              <p className="text-lg font-medium">{alarm.name}</p>
              {isOpen && (
                <p className="text-sm font-medium">
                  {getTimeFormat(alarm.timestamp)}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={"/"}
        className="flex items-center justify-center gap-2 self-end h-4 hover:opacity-80 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        <p className="text-md font-semibold text-gray">MORE</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="w-2 !h-4 pb-0.5 flex items-center justify-center"
          color="#8c8c8c"
        />
      </Link>
    </div>
  );
}
