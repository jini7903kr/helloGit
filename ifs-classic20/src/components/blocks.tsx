import type { Block } from "@/lib/rulebook";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4 text-[15.5px] leading-7">
      {blocks.map((block, index) => {
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className="pt-3 font-semibold tracking-tight text-foreground"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "formula") {
          return (
            <p
              key={index}
              className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 font-medium tracking-tight text-foreground"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "note") {
          return (
            <aside
              key={index}
              className="rounded-lg border border-amber-700/30 bg-amber-100/70 px-4 py-3 text-sm leading-6 text-amber-950"
            >
              <p className="font-semibold">{block.title}</p>
              <p className="mt-1">{block.text}</p>
            </aside>
          );
        }
        if (block.type === "ul" || block.type === "ol") {
          const Tag = block.type === "ul" ? "ul" : "ol";
          return (
            <Tag
              key={index}
              className={
                block.type === "ul"
                  ? "list-disc space-y-1.5 pl-5"
                  : "list-decimal space-y-1.5 pl-5"
              }
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Tag>
          );
        }
        return (
          <div key={index} className="overflow-x-auto">
            {block.caption ? (
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                {block.caption}
              </p>
            ) : null}
            <table className="w-full min-w-[28rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  {block.headers.map((header) => (
                    <th key={header} className="px-2 py-2 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="border-b border-border/80">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-2 py-2 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
