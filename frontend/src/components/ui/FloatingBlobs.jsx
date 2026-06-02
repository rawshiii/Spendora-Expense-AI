export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        rounded-full
        bg-[#739072]/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-20
        w-96
        h-96
        rounded-full
        bg-[#D4A373]/20
        blur-3xl
        "
      />
    </div>
  );
}