type Params = {
  params: {
    slug: string;
  };
};

// Generate static params for static export
export async function generateStaticParams() {
  // Return an array of slugs to pre-render at build time
  return [
    { slug: 'hello-world' },
    { slug: 'test-post' },
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
