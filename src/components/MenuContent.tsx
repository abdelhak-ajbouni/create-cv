export default function MenuContent({ className = "", items, activeItem }: Props) {
  return (
    <div className={`menu-content p-2 ${className}`}>
      {
        items?.map(({ id, render }) => (
          <div
            key={id}
            id={`menu-content-${id}`}
            aria-labelledby={`menu-content-${id}`}
          >
            {id === activeItem && (
              render || <div>{id}</div>
            )}
          </div>
        ))
      }
    </div>
  );
}

type Item = {
  id: string | number;
  render: React.ReactNode;
}

type Props = {
  className?: string;
  items: Array<Item>;
  activeItem: string | number;
} 