import Link from "next/link";
type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function FeatureCard({ title, description, href }: FeatureCardProps) {

    return (
        <Link href={href} className="h-full rounded-lg bg-slate-800 p-6 hover:bg-slate-700 transition-colors duration-300">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-slate-400">{description}</p>
        </Link>
    );
}