import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export interface TableHead {
  key: string;
  name: string;
  align: "left" | "center" | "right";
  width: number;
}

export interface CommonTableProps {
  type?: string;
  list?: DefaultTableItem[];
  heads: TableHead[];
  sort: string;
  order: "asc" | "desc";
  onClickSort: (key: string) => void;
}

interface DefaultTableItem {
  [key: string]: any;
}

export default function CommonTable({
  type = "default",
  list = [],
  heads = [],
  sort = "",
  order = "asc",
  onClickSort = () => {},
}: CommonTableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-300">
          {heads.map((head: TableHead) => (
            <th
              className={`text-${head.align} px-4 py-3 cursor-pointer`}
              style={{ width: `${head.width}%` }}
              key={`${type}_table_head_${head.key}`}
              onClick={() => onClickSort(head.key)}
            >
              {head.key !== "id" && (
                <p className={`text-foreground font-medium inline mr-2`}>
                  {head.name}
                </p>
              )}
              {head.key === sort && (
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className={`!w-3 !h-4 mx-auto transition-transform duration-200 ${
                    order === "asc" ? "" : "rotate-180"
                  }`}
                />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((item: DefaultTableItem, index: number) => (
          <tr
            key={`${type}_table_list_${item.id}`}
            className={`hover:bg-gray-200 hover:font-semibold transition-all ${
              index % 2 === 0 ? "bg-background" : "bg-gray-50"
            }`}
          >
            {heads.map((head: TableHead) => {
              const isNumber = typeof item[head.key] === "number";
              return (
                <td
                  className={`text-${head.align} border-b border-gray-200`}
                  style={{ width: `${head.width}%` }}
                  key={`${type}_table_item_${item.id}_${head.key}`}
                >
                  <Link
                    href={`/${type}/${item.id}`}
                    className="block h-full px-4 py-3"
                  >
                    {head.key.toLocaleLowerCase().includes("price") ? (
                      <div className="font-medium text-gray-700">
                        {item[head.key].toLocaleString()}원
                      </div>
                    ) : head.key.toLocaleLowerCase().includes("rate") ? (
                      <div className="font-medium text-red-500">
                        {item[head.key].toLocaleString()}%
                      </div>
                    ) : (
                      <div className="text-gray-700">
                        {item[head.key].toLocaleString()}
                      </div>
                    )}
                  </Link>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
