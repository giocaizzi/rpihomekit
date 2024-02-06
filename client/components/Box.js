import '@/components/styles.css';

export default function Box({ children }) {
  return (
    <div className="container shadow">
      {children}
    </div>
  );
}
