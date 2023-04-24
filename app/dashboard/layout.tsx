import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Fugoku",
    template: "%s | FE",
  },
  description: "Fugoku",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-full">{children}</div>;
}
