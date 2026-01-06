import { getImageUrl } from "./Util";

interface Person {
  name: string;
  imageId: string;
}

export function Avatar({ person, size }: { person: Person; size: number }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Profile() {
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}

export function Gallery() {
  return (
    <section>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
