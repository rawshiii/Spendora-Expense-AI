import api from '../../services/api';

export default function PDFButton() {
  const downloadPDF = async () => {
    try {
      const response = await api.get(
        '/pdf',
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
      link.download =
        'expense-report.pdf';

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      className="
      px-6
      py-3
      rounded-2xl
      bg-[#D4A373]
      text-white
      font-semibold
      hover:opacity-90
      transition
      "
    >
      Export PDF
    </button>
  );
}