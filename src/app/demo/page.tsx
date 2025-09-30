interface PageProps {
  params: {
    demoid: string;
  };
}

export default function Page({ params }: PageProps) {
  const { demoid } = params;

  return (
    <div className="flex flex-col m-20 gap-4">
      <h1 className="text-3xl font-bold text-amber-400">Note Page</h1>
      <ul>
        <li className="drop-shadow-amber-400">Note {demoid}</li>
        <li className="drop-shadow-amber-400">Note 2</li>
        <li className="drop-shadow-amber-400">Note 3</li>
      </ul>
      <p>Ini catatan dari Note Detail {demoid}</p>
    </div>
  );
}