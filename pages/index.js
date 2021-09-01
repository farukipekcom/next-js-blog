function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Merhaba ✋ Ben Faruk, Freelance front-end developer olarak Konya'da
            yaşıyorum.
          </h1>
          <p>
            2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance
            front-end developer olarak çalışıyorum.
          </p>
          <p>
            İzlediğim dizileri PogDesign’da listeliyorum. Çektiğim fotoğraflara
            Instagram profilimden bakabilirsiniz. Dinlediğim şarkılara ise
            Spotify profilimden erişebilirsiniz.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-20">
        <img src="/faruk-ipek.jpg" alt="" />
      </div>
    </>
  );
}

export default HomePage;
