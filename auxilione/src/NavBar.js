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
  // console.log(navHeadings);

  return (
    <div className="navbar">
      {navHeadings.map((heading) => (
        <a key={heading} href={heading}>
          {" "}
          <div className="nav-item hover-underline">{heading}</div>
        </a>
      ))}
    </div>
  );
}
