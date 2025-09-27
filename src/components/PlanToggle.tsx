interface PlanToggleProps {
  isYearly: boolean;
  onToggle: (yearly: boolean) => void;
}

export const PlanToggle = ({ isYearly, onToggle }: PlanToggleProps) => {
  const handleToggle = () => {
    const newValue = !isYearly;
    onToggle(newValue);
    
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track('toggle_yearly', { yearly: newValue });
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
        Monatlich
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        data-umami-event="toggle_yearly"
        aria-label={isYearly ? "Zu monatlicher Abrechnung wechseln" : "Zu jährlicher Abrechnung wechseln"}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          } ${isYearly ? 'bg-primary' : 'bg-white'}`}
        />
      </button>
      <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
        Jährlich
      </span>
      {isYearly && (
        <span className="ml-2 inline-flex items-center rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
          spare 20%
        </span>
      )}
    </div>
  );
};