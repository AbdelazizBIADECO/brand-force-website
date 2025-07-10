interface OutputLineProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export default function OutputLine({ label, value, highlight = false }: OutputLineProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`text-lg font-semibold ${
        highlight ? 'text-neon-green' : 'text-foreground'
      }`}>
        {value}
      </span>
    </div>
  );
}