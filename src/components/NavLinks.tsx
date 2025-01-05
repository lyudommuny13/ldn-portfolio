import { motion } from 'framer-motion';
import { smoothScroll } from '../utils/scroll';

interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function NavLinks({ mobile, onClose }: NavLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onClose) {
      onClose(); // Close mobile menu first
    }
    smoothScroll(e, href); // This will now handle the delay internally
  };

  return (
    <>
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          className={`text-gray-700 hover:text-gray-900 transition-colors ${
            mobile ? 'block w-full py-2' : ''
          }`}
          onClick={(e) => handleClick(e, link.href)}
          whileHover={{ scale: mobile ? 1 : 1.05, x: mobile ? 4 : 0 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </motion.a>
      ))}
    </>
  );
}