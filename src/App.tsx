"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const monaImages = [
    "MonaUno.jpg",
    "MonaDos.jpg",
    "MonaTres.jpg",
    "MonaCautro.jpg",
    "MonaCinco.jpg",
    "MonaSeis.jpg",
  ];
  const topImageSrc =
    noCount > 0
      ? `${import.meta.env.BASE_URL}${monaImages[(noCount - 1) % monaImages.length]}`
      : "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "Embarassing pics until you say yes....",
      "What about a date night at rustic river",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Parth's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src={topImageSrc} />
          <h1 className="my-4 text-4xl">Will you come to SC with me?</h1>
          <div className="flex items-center gap-4">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              style={{ fontSize: `${Math.max(16, noCount * 2 + 16)}px` }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
