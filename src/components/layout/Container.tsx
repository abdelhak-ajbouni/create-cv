import { TiArrowLeft } from "react-icons/ti";

export default function Container({ className, classNameContent, title, hasShadow, onGoBack, children }: Props) {
  const hasHeader = title || onGoBack;

  return (
    <div className={`container ${className} ${hasShadow ? "shadow-md shadow-gray-100" : ""} mx-auto`}>
      {
        hasHeader && (
          <>
            <div className="container-header flex justify-start items-center">
              {onGoBack && (
                <TiArrowLeft
                  className="cursor-pointer hover:bg-gray-100 rounded-full p-1 text-gray-600"
                  size={48}
                  onClick={onGoBack}
                />
              )}
              {title && <h2 className="text-gray-600 text-xl font-bold mx-2">{title}</h2>}
            </div>
            <hr className="mb-4" />
          </>
        )
      }
      <div className={`container-content ${classNameContent} `}>
        {children}
      </div>
    </div>
  );
}

Container.defaultProps = {
  className: "",
  classNameContent: "",
  title: "",
  hasShadow: false,
}

type Props = {
  className?: string;
  classNameContent?: string;
  title?: string;
  hasShadow?: boolean;
  onGoBack?: () => void;
  children: React.ReactNode;
}