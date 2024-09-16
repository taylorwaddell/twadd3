import { compileMDX } from "next-mdx-remote/rsc";
import fs from "node:fs";
import path from "node:path";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface Params {
  params: {
    slug: string[];
  };
}

export const runtime = "nodejs";
export const dynamic = "force-static";

const contentSource = "src/app/writing/content";

export function generateStaticParams() {
  const targets = fs.readdirSync(path.join(process.cwd(), contentSource), {
    recursive: true,
  });

  const files = [];

  for (const target of targets) {
    if (
      fs
        .lstatSync(path.join(process.cwd(), contentSource, target.toString()))
        .isDirectory()
    ) {
      continue;
    }

    files.push(target);
  }

  return files.map((file) => ({
    slug: file.toString().replace(".mdx", "").split("/"),
  }));
}

export default async function Page({ params }: Params) {
  const source = fs.readFileSync(
    path.join(process.cwd(), contentSource, params.slug.join("/")) + ".mdx",
    "utf8"
  );

  const components = {};

  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
    components,
  });

  return <div>{content}</div>;
}
