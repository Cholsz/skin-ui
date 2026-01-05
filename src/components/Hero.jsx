const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-sky-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Skin Disease Classification
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Sistem klasifikasi penyakit pada kulit manusia menggunakan 
          <span className="font-medium text-sky-600"> Convolutional Neural Network (Mobile-Net V2)</span>.
        </p>

        <a
          href="#upload"
          className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg 
                     hover:bg-sky-700 transition"
        >
          Try Demo
        </a>

      </div>
    </section>
  );
};

export default Hero;
