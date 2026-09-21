type DividerProps = {
  className?: string;
};

export function Divider({ className = "" }: DividerProps) {
  return (
    <hr
      className={`border-1 border-t border-dashed border-divider my-10 ${className} px-5 sm:px-6`}
    />
  );
}
