import WritingCard from "~/components/WritingCard";
import fs from "node:fs";
import matter from "gray-matter";
import path from "node:path";

function getWritings() {
  const contentSource = "src/app/writing/content";
  const targets = fs.readdirSync(path.join(process.cwd(), contentSource), {
    recursive: true,
  });

  const files = [];

  for (const target of targets) {
    const isTargetDirectory = fs
      .lstatSync(path.join(process.cwd(), contentSource, target.toString()))
      .isDirectory();

    if (isTargetDirectory) {
      continue;
    }

    files.push(target);
  }

  const writings = files.map((file) => {
    const content = fs.readFileSync(
      path.join(process.cwd(), contentSource, file.toString()),
      "utf8"
    );
    const { data } = matter(content);

    const base = file.toString().replace(".mdx", "");
    return { title: base.replace(/-/g, " "), slug: base, data: data };
  });

  return writings.sort((a, b) => b.data.date - a.data.date);
}
export default function Writings() {
  return getWritings().map((w, i) => (
    <WritingCard
      key={i}
      title={w.title}
      link={"/writing/" + w.slug}
      className="show"
    />
  ));
}
