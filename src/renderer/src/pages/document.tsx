import { Link } from "react-router-dom";

export function Document() {
  return (
    <main className="flex-1 flex items-center justify-center text-notion-400">
      Document
      <Link to="/" className="text-notion-200 ml-2">
        Go to Home Page
      </Link>
    </main>
  )
}
