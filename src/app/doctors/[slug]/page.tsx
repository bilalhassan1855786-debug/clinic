interface Props {
  params: { slug: string };
}

export default function DoctorDetail({ params }: Props) {
  const { slug } = params;
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-4 capitalize">
        Dr. {slug.replace("-", " ")}
      </h1>
      <p>
        Detailed profile of Dr. {slug.replace("-", " ")}. Learn about their
        expertise, experience, and patient care philosophy.
      </p>
    </div>
  );
}
