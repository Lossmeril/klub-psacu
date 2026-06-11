interface CartoonBoxProps {
  children: React.ReactNode;
  className?: string;
}

const CartoonBox: React.FC<CartoonBoxProps> = ({ children, className }) => {
  return (
    <div
      className={`p-8 lg:p-12 bg-white overflow-hidden flex flex-col justify-start gap-4 comic-box ${className}`}
    >
      {children}
    </div>
  );
};

export default CartoonBox;
