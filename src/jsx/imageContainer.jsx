export default function ImageContaier({imageSrc, title1, title2, title3}){
    return (
        <section className="image-container">
            <Image img={imageSrc} title="San Francisco" />
            <Image img={imageSrc} title="New York" />
            <Image img={imageSrc} title="London" />
        </section>
    );
}