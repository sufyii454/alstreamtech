import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { posts } from "../lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found | ALStreamTech" }, { name: "robots", content: "noindex" }] };
    }
    const p = (loaderData as { post: (typeof import("../lib/blog-posts").posts)[number] }).post;
    return {
      meta: [
        { title: `${p.title} | ALStreamTech Blog` },
        { name: "description", content: p.summary },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.summary },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Article not found</h1>
      <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
      <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
    </div>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to all articles
      </Link>
      <div className="mt-8">
        <span className="glass rounded-full px-3 py-1 text-xs font-semibold text-primary">{post.category}</span>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.read}</span>
        </div>
      </div>
      <img src={post.image} alt={post.title} className="mt-8 aspect-video w-full rounded-2xl object-cover" />
      <div className="prose prose-invert mt-10 max-w-none">
        <p className="text-lg text-muted-foreground">{post.summary}</p>
        {post.body.map((para: string, i: number) => (
          <p key={i} className="mt-6 text-foreground/90 leading-relaxed">{para}</p>
        ))}
      </div>
    </article>
  );
}
