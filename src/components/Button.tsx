const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="
      button 
      rounded-full 
      py-1 
      px-3 
      font-normal 
      tracking-[-0.8px] 
      text-base 
      cursor-pointer 
      bg-button-background 
      shadow-lg 
      shadow-button-shadow 
      text-button-text"
    >
      <span>{text || ""}</span>
    </button>
  );
};

export default Button;
