export default function Image({ title, img }) {
  return (
    <div>
      <img src={img} alt={title} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      <div>{title}</div>
    </div>
  );
}

