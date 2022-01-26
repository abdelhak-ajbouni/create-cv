import { FcOk, FcClock } from "react-icons/fc";

export default function Menu({ className, items, orientation, activeItem, onClick }: Props) {

  const renderStatusIcon = (status: Status) => {
    switch (status) {
      case "completed":
        return <FcOk />;
      case "in-progress":
        return <FcClock />;
      case "not-started":
        return <FcOk />;
      default:
        return null;
    }
  };

  
  
  return (
    <div className={`menu ${className}`}>
      <ul className={`flex flex-col ${orientation === "vertical" ? "flex-col" : "md:flex-row"}`}>
        {items.map(({ id, value, label, status }) => (
          <li
            key={id}
            className={`
              ${id === activeItem ? "active text-blue-500 border-l-blue-200 border-l-2" : "text-neutral-600"} 
              flex justify-start items-center 
              md:p-2 cursor-pointer hover:bg-neutral-100
            `}
            onClick={() => onClick?.({ id, value, label })}
          >
            {renderStatusIcon(status)}
            <a className="block md:inline-block ml-2 no-underline hover:text-blue-500">
              {label || value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Status = "completed" | "in-progress" | "not-started" | undefined;

type Item = {
  id: string | number;
  value: string;
  label?: string;
  status?: Status;
}

type Props = {
  className?: string;
  items: Array<Item>;
  activeItem: string | number;
  orientation?: 'horizontal' | 'vertical';
  onClick?: (value: Item) => void;
}
