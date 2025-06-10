const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="
        button-fx
        bg-[#f9abee] text-[#682d60] 
        rounded-[15px]
        py-1 
        px-3 
        font-normal 
        tracking-[-0.8px] 
        cursor-pointer 
        bg-button-background 
        shadow-lg 
        shadow-button-shadow 
        text-button-text
      "
      
    >
      <span className="text-xs md:text-base">{text || ""}</span>
    </button>
  );
};

export default Button;
