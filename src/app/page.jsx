"use client";

import React from 'react';

import Head from 'next/head'

import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel';

const thumbnails = [
  { "src": "ape/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "technology/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "candella/thumbnail.png", "width": 1280, "height": 720 },
  { "src": "sylvie_kreusch/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "knalpot/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "nye/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "whorses/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "obscuur/thumbnail.jpg", "width": 1280, "height": 720 },
  { "src": "gertie_decraene/thumbnail.jpg", "width": 1280, "height": 720 }
]

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel images={thumbnails} />
    </div>
  )
}
