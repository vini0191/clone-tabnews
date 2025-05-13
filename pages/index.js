import Image from 'next/image';

function Home() {
  return (
    <>
      <h1>Irma, I love you! ❤️🥰</h1>
      <Image
        src="/images/irma_and_vinicius.jpeg"
        width={4032}
        height={3024}
        alt="Irma and Vinicius"
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '75vw',
          maxHeight: '75vh',
        }}
      />
    </>
  );
}

export default Home;
