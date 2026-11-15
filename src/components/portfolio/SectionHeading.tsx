export function SectionHeading({ index, id, title }: { index: string; id: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 id={id} className="text-2xl font-semibold text-foreground sm:text-3xl">
        <span className="mr-3 text-base font-normal text-primary sm:text-lg">{index}.</span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}
