import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { active, progress, item, loaded, total, errors } = useProgress();

  return (
    <Html center zIndexRange={[100, 100]}>
      <div className="w-[320px] max-w-[80vw] rounded-xl bg-black/70 text-[#e9f6ff] shadow-2xl backdrop-blur-md p-3 font-sans">
        <div className="flex items-center gap-2 mb-2">
          <div className="size-4 border-2 border-white/25 border-t-sky-300 rounded-full animate-spin" />
          <div className="text-sm font-semibold tracking-tight">
            {active ? "Loading assets…" : "Preparing…"}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-sky-300 via-sky-500 to-blue-600 transition-[width] duration-100"
              style={{
                width: `${Math.min(100, Math.max(0, progress))}%`,
              }}
            />
          </div>
          <div className="w-12 text-right text-xs tabular-nums opacity-90">
            {Math.round(progress)}%
          </div>
        </div>

        <div className="flex justify-between gap-2 text-[11px] opacity-90 mt-2">
          <div>
            <span className="font-semibold">Status:</span>{" "}
            {active ? "active" : "idle"}
          </div>
          <div>
            <span className="font-semibold">Files:</span> {loaded}/{total}
          </div>
        </div>

        {item && (
          <div className="mt-2 text-[11px] opacity-85 truncate" title={item}>
            {item}
          </div>
        )}

        {!!errors?.length && (
          <div className="mt-2 text-[11px] text-rose-300">
            {errors.length} error{errors.length > 1 ? "s" : ""} encountered
          </div>
        )}
      </div>
    </Html>
  );
};

export default Loader;
