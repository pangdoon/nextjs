import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

export const getStaticProps = async() => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수

  const [allBooks, recBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recBooks,
    },

  };
};

export default function Home({allBooks,recBooks}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
    <Head>
      <title>팽둔북스</title>
      <meta property="og:image" content="/thumbnail.jpg" />
      <meta property="og:title" content="팽둔북스" />
      <meta property="og:description" content="팽둔 북스에 등록된 도서들을 만나보거라"/>
    </Head>
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recBooks.map((book)=> (<BookItem key={book.id} {...book}/>))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book)=> (<BookItem key={book.id} {...book}/>))}
      </section>
  </div>
  </>
  );
}


Home.getLayout = (page:ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}
