export default function Spinner() {
  return (
    <div className="flex items-center justify-center flex-col z-100">
      <span className="w-12 h-12 border-4 border-[var(--text)] border-b-transparent rounded-full animate-spin mt-3 mb-3"></span>
      <p>Loading Data from Api</p>
    </div>
  );
}