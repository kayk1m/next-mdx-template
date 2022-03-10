import { useAssertiveStore } from '@/context/assertives';

interface TestButtonProps {
  title: string;
}
export default function TestButton({ title }: TestButtonProps) {
  const { showNoti } = useAssertiveStore();

  return (
    <button
      className="rounded-md bg-blue-800 py-2 px-3 text-white shadow-lg hover:bg-blue-900"
      onClick={() => showNoti({ title })}
    >
      <span>click me</span>
    </button>
  );
}
