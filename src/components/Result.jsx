const Result = ({ result }) => {
  if (!result) return null;

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Classification Result
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h3 className="text-2xl font-semibold text-sky-600 mb-4">
            {result.label}
          </h3>

          <p className="text-gray-700 mb-4">
            Confidence Score:
            <span className="font-semibold">
              {" "}{(result.confidence * 100).toFixed(2)}%
            </span>
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div
              className="bg-sky-600 h-4 rounded-full"
              style={{ width: `${result.confidence * 100}%` }}
            />
          </div>

          <p className="text-sm text-gray-500">
            Hasil prediksi diperoleh dari model CNN (Mobile-Net V2)
          </p>

        </div>
      </div>
    </section>
  );
};

export default Result;
