import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const CATEGORIES = ['cross', 'portrait', 'balkan', 'luxury'];

const DragDropPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [category, setCategory] = useState('');
  const [previews, setPreviews] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles]);
      setSuccess(false);
    },
  });

  useEffect(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);

  const handleRemove = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!category || files.length === 0) return;
    setUploading(true);

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('category', category);
        formData.append('title', file.name);
        formData.append('image', file);


        await fetch('http://localhost:8080/api/upload', {
          method: 'POST',
          body: formData,
        });
      }

      setFiles([]);
      setCategory('');
      setSuccess(true);
    } catch (err) {
      console.error('Upload mislukt:', err);
    }

    setUploading(false);
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold mb-8 text-center">📸 Foto’s uploaden</h1>

        <div
          {...getRootProps()}
          className={`border-4 border-dashed rounded-lg p-10 text-center cursor-pointer ${
            isDragActive ? 'border-yellow-400 bg-gray-700' : 'border-gray-600 bg-gray-700 hover:bg-gray-600'
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-gray-300">
            {isDragActive ? 'Laat los om te uploaden...' : 'Sleep je foto’s hier of klik om te selecteren'}
          </p>
        </div>

        {previews.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {previews.map((src, index) => (
              <div key={index} className="relative group">
                <img
                  src={src}
                  alt={`Preview ${index + 1}`}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                <button
                  onClick={() => handleRemove(index)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
          >
            <option value="">📁 Kies een categorie</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <button
            onClick={handleUpload}
            disabled={!category || files.length === 0 || uploading}
            className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold text-white transition ${
              !category || files.length === 0 || uploading
                ? 'bg-yellow-300/30 cursor-not-allowed'
                : 'bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg'
            }`}
          >
            {uploading ? 'Bezig met uploaden...' : 'Uploaden'}
          </button>
        </div>

        {success && (
          <div className="mt-6 text-green-400 text-center font-medium">
            ✅ Upload succesvol opgeslagen in database!
          </div>
        )}
      </div>
    </section>
  );
};

export default DragDropPage;
