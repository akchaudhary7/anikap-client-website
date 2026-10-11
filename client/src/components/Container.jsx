export default function Container({ as: Component = "div", className = "", children }) {
  return (
    <Component className={`mx-auto w-full px-5 md:px-16 ${className}`}>
      {children}
    </Component>
  );
}