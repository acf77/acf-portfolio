import "./SlideCard.css";

interface CardProps {
  image: string | undefined;
    alt: string;
    repoLink: string;
}

export default function SlideCard({ repoLink,image, alt }: CardProps) {
  return (
    <div className="card">
      <img alt={alt} src={image} />
      <div className="overlay">
        <a className="hover-text" href={repoLink}>
          See project
        </a>
      </div>
    </div>
  );
}
