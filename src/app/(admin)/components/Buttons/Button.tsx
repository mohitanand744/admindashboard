import React from "react";
import { LogOut } from "lucide-react";

interface ButtonProps {
  variant?: "normal" | "danger";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = "normal", onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all 
        ${variant === "danger" ? "bg-red-600 text-white hover:bg-red-600" : "bg-gray-200 text-black hover:bg-gray-300"} ${className}`}
    >
      {variant === "danger" && <LogOut size={18} />}
      {children}
    </button>
  );
};

export default Button;  
