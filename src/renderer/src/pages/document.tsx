import { Link } from "react-router-dom";
import { ToC } from "../components/ToC";

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-notion-300 font-semibold text-xs uppercase">
          table of contents
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Node.js</ToC.Link>
            <ToC.Link>Deno</ToC.Link>
            <ToC.Link>Ruby on Rails</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex flex-col items-center">
        hhhhyfytjkkyg
      </section>
    </main>
  )
}
