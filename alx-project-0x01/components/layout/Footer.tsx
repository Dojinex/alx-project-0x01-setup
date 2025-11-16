const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} My Next App</p>
    </footer>
  );
};

export default Footer;
