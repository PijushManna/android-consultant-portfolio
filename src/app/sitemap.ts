import { MetadataRoute } from "next";

const BASE_URL = "https://pijushmanna.github.io/android-consultant-portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/apps",
    "/projects",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
