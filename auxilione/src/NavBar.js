import "./NavBar.css";
export default function NavBar() {
  const navHeadings = [
    "About Us",
    "What We Do",
    "Energy Broker Facts",
    "Meet Our Senior Team",
    "Blog",
    "Contact",
  ];
  return (
    <div className="navbar">
      {navHeadings.map((heading) => (
        <div key={heading} className="nav-item hover-underline">
          {heading}
        </div>
      ))}
    </div>
  );
}
