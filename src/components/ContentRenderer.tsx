import { Fragment } from "react";

interface ContentRendererProps {
  content: string;
}

export function ContentRenderer({ content }: ContentRendererProps) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  const parts: Array<{
    type: "text" | "image";
    content: string;
    alt?: string;
  }> = [];

  let lastIndex = 0;
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        content: content.substring(lastIndex, match.index),
      });
    }

    parts.push({
      type: "image",
      content: match[2],
      alt: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push({
      type: "text",
      content: content.substring(lastIndex),
    });
  }

  if (parts.length === 0) {
    parts.push({ type: "text", content });
  }

  return (
    <div className="space-y-4">
      {parts.map((part, index) => {
        if (part.type === "image") {
          return (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-border my-4"
            >
              <img
                src={part.content}
                alt={part.alt || "Content image"}
                className="w-full h-auto"
                loading="lazy"
              />
              {part.alt && (
                <div className="p-2 bg-muted text-muted-foreground text-center italic">
                  {part.alt}
                </div>
              )}
            </div>
          );
        } else {
          return <FormattedText key={index} text={part.content} />;
        }
      })}
    </div>
  );
}

function FormattedText({ text }: { text: string }) {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts: Array<{ type: "normal" | "bold"; content: string }> = [];

  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "normal",
        content: text.substring(lastIndex, match.index),
      });
    }

    parts.push({
      type: "bold",
      content: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({
      type: "normal",
      content: text.substring(lastIndex),
    });
  }

  if (parts.length === 0) {
    parts.push({ type: "normal", content: text });
  }

  return (
    <div className="text-muted-foreground whitespace-pre-line">
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part.type === "bold" ? (
            <strong className="font-semibold text-foreground">
              {part.content}
            </strong>
          ) : (
            part.content
          )}
        </Fragment>
      ))}
    </div>
  );
}
