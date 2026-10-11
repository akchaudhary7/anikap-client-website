export default function Button({
  as: Component = "a",
  variant = "gold",
  className = "",
  children,
  ...props
}) {
  const styles = {
    gold: "border border-gold bg-gold text-ink hover:bg-gold-dark",
    darkOutline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
    lightOutline: "border border-white bg-transparent text-white hover:bg-white hover:text-ink",
  };

  return (
    <Component
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6.5 py-3.5 text-[15px] font-extrabold transition-colors ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}