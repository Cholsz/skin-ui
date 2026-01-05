import { useState } from "react";

const Upload = ({ setResult }) => {
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePredict = () => {
    if (!imageFile) return alert("Silakan upload gambar terlebih dahulu");

    setLoading(true);

    // 🔴 SIMULASI HASIL MODEL (NANTI DARI FLASK)
    setTimeout(() => {
      setResult({
        label: "Apple Scab",
        confidence: 0.92,
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="upload" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Upload Skin Image
        </h2>

        <p className="text-gray-600 mb-8">
          Unggah gambar kulit untuk proses klasifikasi penyakit
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="fileInput"
          />

          <label
            htmlFor="fileInput"
            className="cursor-pointer text-sky-600 font-medium"
          >
            Klik untuk upload gambar
          </label>

          {preview && (
            <div className="mt-6">
              <img
                src={preview}
                alt="Preview"
                className="mx-auto max-h-64 rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <button
          onClick={handlePredict}
          disabled={loading}
          className={`mt-8 px-6 py-3 rounded-lg text-white transition
            ${loading ? "bg-gray-400" : "bg-sky-600 hover:bg-sky-700"}`}
        >
          {loading ? "Processing..." : "Predict"}
        </button>

      </div>
    </section>
  );
};

export default Upload;
