import { ReactNode } from "react";
import style from "./global-layout.module.css"
import Link from "next/link"

export default function GlobalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
  <div className={style.container}>
    <header className={style.header}>
      <Link href={"/"}>📚 PANGDOON BOOKS</Link>
      </header>
    <main className={style.main}>{children}</main>
    <footer className={style.footer}>made by Pangdoon</footer>
  </div>);
}