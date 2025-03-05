import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const socialLinks = [
  { icon: Github, href: "https://github.com/lyudommuny13", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:your.okimkhmer@gmail.com", label: "Email" }
];

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  padding: 4rem 0;
  overflow: hidden;
  background-color: #000; /* Ensure the base background is black */
`;

const PatternBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: space-between;

  .pattern {
    width: 50%; /* Each pattern takes half the width */
    height: 100%;
    position: relative;
    --c: #09f;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background-image: radial-gradient(
        ellipse 1.5px 2px at 1.5px 50%,
        #0000 0,
        #0000 90%,
        #000 100%
      );
      background-size: 25px 8px;
    }

    background-color: #000;
    background-image: radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 235px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 252px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 252px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 126px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 150px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 150px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 75px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 253px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 253px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 126.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 204px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 204px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 102px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 134px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 134px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 67px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 179px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 179px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 89.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 299px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 299px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 149.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 215px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 215px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 107.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 281px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 281px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 140.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 158px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 158px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 79px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 210px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 105px, var(--c) 100%, #0000 150%);
    background-size:
      300px 235px,
      300px 235px,
      300px 235px,
      300px 252px,
      300px 252px,
      300px 252px,
      300px 150px,
      300px 150px,
      300px 150px,
      300px 253px,
      300px 253px,
      300px 253px,
      300px 204px,
      300px 204px,
      300px 204px,
      300px 134px,
      300px 134px,
      300px 134px,
      300px 179px,
      300px 179px,
      300px 179px,
      300px 299px,
      300px 299px,
      300px 299px,
      300px 215px,
      300px 215px,
      300px 215px,
      300px 281px,
      300px 281px,
      300px 281px,
      300px 158px,
      300px 158px,
      300px 158px,
      300px 210px,
      300px 210px,
      300px 210px;
    animation: hi 150s linear infinite;
  }

  @keyframes hi {
    0% {
      background-position:
        0px 220px,
        3px 220px,
        151.5px 337.5px,
        25px 24px,
        28px 24px,
        176.5px 150px,
        50px 16px,
        53px 16px,
        201.5px 91px,
        75px 224px,
        78px 224px,
        226.5px 350.5px,
        100px 19px,
        103px 19px,
        251.5px 121px,
        125px 120px,
        128px 120px,
        276.5px 187px,
        150px 31px,
        153px 31px,
        301.5px 120.5px,
        175px 235px,
        178px 235px,
        326.5px 384.5px,
        200px 121px,
        203px 121px,
        351.5px 228.5px,
        225px 224px,
        228px 224px,
        376.5px 364.5px,
        250px 26px,
        253px 26px,
        401.5px 105px,
        275px 75px,
        278px 75px,
        426.5px 180px;
    }

    to {
      background-position:
        0px 6800px,
        3px 6800px,
        151.5px 6917.5px,
        25px 13632px,
        28px 13632px,
        176.5px 13758px,
        50px 5416px,
        53px 5416px,
        201.5px 5491px,
        75px 17175px,
        78px 17175px,
        226.5px 17301.5px,
        100px 5119px,
        103px 5119px,
        251.5px 5221px,
        125px 8428px,
        128px 8428px,
        276.5px 8495px,
        150px 9876px,
        153px 9876px,
        301.5px 9965.5px,
        175px 13391px,
        178px 13391px,
        326.5px 13540.5px,
        200px 14741px,
        203px 14741px,
        351.5px 14848.5px,
        225px 18770px,
        228px 18770px,
        376.5px 18910.5px,
        250px 5082px,
        253px 5082px,
        401.5px 5161px,
        275px 6375px,
        278px 6375px,
        426.5px 6480px;
    }
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      {/* New Pattern Background */}
      <PatternBackground>
        <div className="pattern" /> {/* Left Pattern */}
        <div className="pattern" /> {/* Right Pattern */}
      </PatternBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section with Card */}
          <motion.div 
            className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="space-y-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                LYUDOMMUNY THOL
              </h3>
              <p className="text-gray-400 font-light">
                Building digital experiences that matter
              </p>
            </motion.div>
            <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur group-hover:opacity-30 transition-opacity" />
          </motion.div>
          
          {/* Social Links with Hover Cards */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors relative z-10" />
                <span className="absolute -inset-[1px] -z-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <motion.span
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-xs rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  {social.label}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Footer Bottom with Animated Border */}
        <motion.div 
          className="relative mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-sm text-gray-400"
              whileHover={{ scale: 1.01 }}
            >
              © {currentYear} LYUDOMMUNY THOL. All rights reserved.
            </motion.p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group relative text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute inset-0 -z-10"
                    whileHover={{
                      opacity: [0, 1, 0],
                      transition: { duration: 1, repeat: Infinity }
                    }}
                  >
                    <ExternalLink className="w-4 h-4 absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </StyledFooter>
  );
}