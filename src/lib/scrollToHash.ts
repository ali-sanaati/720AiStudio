import type { MouseEvent } from "react";

/**
 * Normalizes path from href (e.g. "/#products" -> "/", "/bimetryx#contact" -> "/bimetryx").
 */
function getPathFromHref(href: string): string {
  const path = href.split("#")[0].trim();
  return path || "/";
}

/**
 * Returns the hash id from href (e.g. "/#products" -> "products").
 */
export function getHashFromHref(href: string): string | null {
  const hash = href.split("#")[1];
  return hash?.trim() || null;
}

/**
 * Scrolls the element with the given id into view.
 */
export function scrollToSection(sectionId: string, options?: ScrollIntoViewOptions): void {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start", ...options });
  }
}

/**
 * Use as onClick for Next.js Link (or <a>) that points to a hash on the current page.
 * When current pathname matches the link's path, prevents default navigation and scrolls to the section,
 * so clicking the same hash link again still scrolls (fixes "second click does nothing").
 */
export function handleHashLinkClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string
): void {
  const linkPath = getPathFromHref(href);
  if (pathname !== linkPath) return;
  const hash = getHashFromHref(href);
  if (!hash) return;
  e.preventDefault();
  scrollToSection(hash);
}
