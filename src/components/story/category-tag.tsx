export function CategoryTag({ category }: { category: string }) {
  return (
    <span className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600">
      {category}
    </span>
  );
}
