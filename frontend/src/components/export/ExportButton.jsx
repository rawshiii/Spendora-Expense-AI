import api from '../../services/api';

export default function ExportButton() {
  const downloadCSV = async () => {
    try {
      const response = await api.get(
        '/export/csv',
        {
          responseType: 'blob',
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link =
        document.createElement('a');

      link.href = url;
      link.download = 'expenses.csv';

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={downloadCSV}
      className="
      px-6
      py-3
      rounded-2xl
      bg-[#4F6F52]
      text-white
      font-semibold
      hover:bg-[#739072]
      transition
      "
    >
      Export CSV
    </button>
  );
}