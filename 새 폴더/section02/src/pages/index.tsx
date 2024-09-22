import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getStaticProps = async() => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수

    console.log("인덱스 페이지")

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
  );
}


Home.getLayout = (page:ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
}
