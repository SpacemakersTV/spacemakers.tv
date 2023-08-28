"use client";

import React from 'react';

import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel';

let images = ["obscuur1.jpg", "obscuur2.jpg"];

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel images={images} />
    </div>
  )
}
