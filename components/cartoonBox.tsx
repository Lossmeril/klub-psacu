interface CartoonBoxProps {
  children: React.ReactNode;
}

const CartoonBox: React.FC<CartoonBoxProps> = ({ children }) => {
  return (
    <div
      style={{
        borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px !important",
        border: "3px solid rgba(0,0,0)",
      }}
      className="p-16 bg-white overflow-hidden flex flex-col justify-center gap-4"
    >
      {children}
    </div>
  );
};

export default CartoonBox;
