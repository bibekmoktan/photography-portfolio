import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from '@portabletext/react';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-sm leading-relaxed text-gray-600">{children}</p>,
  },
};

export function Prose({ value, className }: { value?: PortableTextBlock[]; className?: string }) {
  if (!value || value.length === 0) return null;

  return (
    <div className={className ? `flex flex-col gap-4 ${className}` : 'flex flex-col gap-4'}>
      <PortableText value={value} components={components} />
    </div>
  );
}
