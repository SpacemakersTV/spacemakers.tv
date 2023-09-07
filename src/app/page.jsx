"use client";

import React from 'react';

import Head from 'next/head'

import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel';

const thumbnails = [
  "ape/thumbnail.jpg",
  "technology/thumbnail.jpg",
  "candella/thumbnail.png",
  "sylvie_kreusch/thumbnail.jpg",
  "knalpot/thumbnail.jpg",
  "nye/thumbnail.jpg",
  "whorses/thumbnail.jpg",
  "obscuur/thumbnail.jpg",
  "gertie_decraene/thumbnail.jpg"
]

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel images={thumbnails} />
    </div>
  )
}
