import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

export const getServerSideProps = async(context : GetServerSidePropsContext) => {
  
  const q = context.query.q;
  const books = await fetchBooks(q as string)
  
  return {
    props: {books},
  }
}

export default function Page({books}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>
    <Head>
    <title>팽둔서치</title>
      <meta property="og:image" content="/thumbnail.jpg" />
      <meta property="og:title" content="팽둔서치" />
      <meta property="og:description" content="팽둔 북스에 등록된 도서들을 만나보거라"/>
    </Head>
    {books.map((book)=>
    <BookItem key={book.id} {...book}/>)}
  </div>
  
  
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
};

