"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export default function AnalyticsProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  useAnalytics();
  return <>{children}</>;
}
