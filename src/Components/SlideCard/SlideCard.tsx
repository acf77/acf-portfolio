import './SlideCard.css'

interface CardProps {
    image: string | undefined
    alt: string
}

export default function SlideCard({image, alt}: CardProps) {
    return (
        <div className='card' >
            <img alt={alt} src={image}/>
        </div>
      
  )
}

