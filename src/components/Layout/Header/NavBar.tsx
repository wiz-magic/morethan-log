import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "Portfolio", to: "https://drive.google.com/drive/folders/1CobPoUjHDCiNGjnhuzHhy5ughCH5cHdu?usp=sharing" }]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black text-gray-500 dark:text-white nav"
          >
            {/* <Link href={link.to}>
              <a>{link.name}</a>
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
