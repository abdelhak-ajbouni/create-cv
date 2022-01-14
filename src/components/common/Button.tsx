export default function Button({ label, loading = false, children }: Props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      disabled={loading}>
      {loading ? 'Loading...' : children || label}
    </button>
  );
}

type Props = {
  label?: string;
  loading: boolean;
  children: React.ReactNode;
}