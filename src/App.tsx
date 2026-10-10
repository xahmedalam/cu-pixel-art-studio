import { Link, Outlet } from "react-router-dom";

const AllLinks = [
  { slug: "/", label: "Home" },
  { slug: "/dashboard", label: "Dashboard" },
  { slug: "/contact", label: "Contact" },
];

function App() {
  return (
    <div>
      {/* Global Navbar */}
      <nav className="bg-gray-800 text-white p-4 space-x-8">
        {AllLinks.map((link) => (
          <Link key={link.slug} to={link.slug}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Page Content Renders Here */}
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
