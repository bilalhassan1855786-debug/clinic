interface Props {
  params: { slug: string };
}

export default function ServiceDetail({ params }: Props) {
  const { slug } = params;
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-4 capitalize">
        {slug.replace("-", " ")} Service
      </h1>
      <p>
        Learn more about our {slug.replace("-", " ")} care and how we provide
        the best medical treatment for your needs.
      </p>
    </div>
  );
}
