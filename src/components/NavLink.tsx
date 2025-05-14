
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, children, className, onClick }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={cn("text-gray-700 hover:text-blue-600 font-medium link-hover transition-all", isActive && "text-blue-600 font-bold", className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
