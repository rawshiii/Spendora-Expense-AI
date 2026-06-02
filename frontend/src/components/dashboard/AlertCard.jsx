import useAlerts from '../../hooks/useAlerts';

export default function AlertCard() {
  const alerts = useAlerts();

  if (alerts.length === 0) {
    return (
      <div
        className="
        bg-white
        border
        border-[#E5E7EB]
        rounded-3xl
        p-6
        "
      >
        <h2 className="text-xl font-bold mb-4">
          Budget Alerts
        </h2>

        <p className="text-green-600">
          ✅ All budgets are healthy
        </p>
      </div>
    );
  }

  return (
    <div
      className="
      bg-white
      border
      border-[#E5E7EB]
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-xl font-bold mb-4">
        Budget Alerts
      </h2>

      <div className="space-y-3">
        {alerts.map(
          (alert, index) => (
            <div
              key={index}
              className={`
              p-4
              rounded-2xl
              ${
                alert.type ===
                'danger'
                  ? 'bg-red-50 text-red-600'
                  : 'bg-yellow-50 text-yellow-700'
              }
              `}
            >
              ⚠ {alert.message}
            </div>
          )
        )}
      </div>
    </div>
  );
}