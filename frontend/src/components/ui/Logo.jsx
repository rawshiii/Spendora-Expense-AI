export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Spendora"
        className="w-14 h-14 object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold text-[#4F6F52]">
          Spendora
        </h1>

        <p className="text-xs text-[#6B7280]">
          Budget smarter. Spend happier.
        </p>
      </div>
    </div>
  );
}