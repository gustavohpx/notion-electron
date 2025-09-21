import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div className="h-screen w-screen text-notion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center text-notion-400">
          Select or create a document
        </main>
      </div>
    </div>
  )
}
