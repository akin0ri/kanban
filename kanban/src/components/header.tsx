export default function Header() {
  return (
    <div className="p-3 border-bottom border-3">
      <h1>Kanban</h1>
      <div>
        <button type="button" className="me-3 btn btn-primary">
          My Page
        </button>
        <button type="button" className="btn btn-primary">
          tasks
        </button>
      </div>
    </div>
  )
}
