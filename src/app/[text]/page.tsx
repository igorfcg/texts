interface TextPageProps {
    params: { text: string };
  }
  
  export default function TextPage({ params }: TextPageProps) {
    const { text } = params;
  
    return (
      <main className="min-h-screen p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Texto Selecionado</h1>
        <p className="text-lg">{decodeURIComponent(text)}</p>
      </main>
    );
  }
  