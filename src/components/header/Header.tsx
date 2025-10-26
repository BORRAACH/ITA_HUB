import { Link } from "react-router-dom"
import "./header.css"
import Links from "./links"

export default function Header() {

  return (
    <div className="max-h-[1rem]">
      <div className="flex items-center justify-center text-white py-2 gap-8">
        {Links.map((item, key) => {
          return (
            <Link key={key} to={item.path} viewTransition className="relative select-none text-[1.1rem] text-neutral-300 hover:scale-110 active:scale-90 hover:text-neutral-100 active:text-neutral-400 transition-all"> {item.name}</Link>
          )
        })}

      </div>

    </div>
  )
}
