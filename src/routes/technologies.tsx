import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Our Stack | AIXIS" },
      { name: "description", content: "AI, frontend, backend, cloud, DevOps, database and mobile technologies AIXIS uses to build modern software." },
      { property: "og:title", content: "AIXIS Technologies" },
      { property: "og:description", content: "The modern stack we build with." },
    ],
  }),
  component: Technologies,
});

const groups = [
  { name: "AI & ML", items: ["OpenAI GPT-4", "Anthropic Claude", "Llama", "Mistral", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "Hugging Face", "Pinecone", "Weaviate", "Chroma"] },
  { name: "Frontend", items: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"] },
  { name: "Backend", items: ["Node.js", "Python", "FastAPI", ".NET", "Java Spring", "Go", "GraphQL", "REST"] },
  { name: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"] },
  { name: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Vercel", "Cloudflare", "Supabase"] },
  { name: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "ArgoCD", "Datadog"] },
  { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake", "BigQuery", "ClickHouse"] },
  { name: "Data", items: ["Airflow", "dbt", "Airbyte", "Kafka", "Spark", "Looker", "Tableau"] },
];

function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title={<>A modern stack for <span className="text-gradient">intelligent software</span></>}
        subtitle="We're pragmatic about tools — we pick the right ones for the job, and we keep sharpening our craft."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 space-y-8">
        {groups.map(g => (
          <div key={g.name} className="glass-strong rounded-3xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary shadow-glow" />
              <div className="font-display text-xl font-semibold">{g.name}</div>
              <div className="ml-auto text-xs text-muted-foreground">{g.items.length} tools</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(i => (
                <span key={i} className="glass rounded-xl px-4 py-2 text-sm font-medium transition hover:bg-primary/20 hover:text-primary">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CTASection />
    </>
  );
}
