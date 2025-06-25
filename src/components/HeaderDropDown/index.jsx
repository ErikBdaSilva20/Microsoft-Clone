export function DropDown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle bg-transparent text-black border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Toda a Microsoft
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Este projeto
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Tem como função
          </a>
        </li>

        <li>
          <a className="dropdown-item" href="#">
            De praticar React
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Portanto paciencia se
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            não há muito por aqui!
          </a>
        </li>
      </ul>
    </div>
  )
}
