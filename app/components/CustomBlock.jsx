import Image from "next/image";

export default function Feature({ blok }) {
  return (
    <div className="feature">
      {/* <span>{blok}</span> */}
      {/* <span>HERE Image blok adadad asdo</span> */}
      {blok?.blockImage?.map((image, index) => <Image key={index} height={100} width={100} src={image.filename} alt="custom alt" />)}
      <h1>herehre</h1>
      <h1>herehre</h1>
    </div>
  );
}