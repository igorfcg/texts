"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState<string[]>([]);
  const router = useRouter();

  const addText = () => {
    if (text.trim()) {
      setTexts([...texts, text]);
      setText("");
    }
  };

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Lista de Textos</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded p-2"
          placeholder="Digite o texto..."
        />
        <button
          onClick={addText}
          className="bg-blue-500 text-white rounded p-2"
        >
          Adicionar
        </button>
      </div>

      <ul className="w-full max-w-md space-y-2">
        {texts.map((t, index) => (
          <li key={index}>
            <button
              onClick={() => router.push(`/${encodeURIComponent(t)}`)}
              className="w-full text-left bg-gray-100 hover:bg-gray-200 p-2 rounded"
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
