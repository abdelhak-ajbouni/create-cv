import { FcLeft } from "react-icons/fc";

export default function Container({ className = "", title, hasShadow, onGoBack, children }: Props) {
  return (
    <div className={`
      container 
      ${className} 
      ${hasShadow ? "shadow-md shadow-gray-100" : ""} 
      mx-auto
    `}>
      <div className="container-header flex justify-start items-center mb-4">
        {onGoBack && (
          <div className="flex">
            <FcLeft
              className="cursor-pointer hover:bg-gray-100 rounded-full p-2"
              size={48}
              onClick={onGoBack}
            />
          </div>
        )}
        {title && <h2 className="text-24">{title}</h2>}
      </div>
      <div className="container-content flex">
        {children}
      </div>
    </div>
  );
}

type Props = {
  className?: string;
  title?: string;
  hasShadow?: boolean;
  onGoBack?: () => void;
  children: React.ReactNode;
}