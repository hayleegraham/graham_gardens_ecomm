import Image from 'next/image';

export default function New() {




  return (
    <div>
     <h1>hi</h1>
     <Image
        src="/sunflower.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
         
  );
}
