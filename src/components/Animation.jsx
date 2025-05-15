const Animation = () => {
  return (
    <div className="relative text-center pt-24">
      {/* Animated Sparkle SVG */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 fill-current text-[#1f4ef1] dark:text-[#E0F11F]"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: 'scalePulse 2s ease-in-out infinite',
        }}
      >
        <path d="M256 0C277 106 406 139 512 160C406 181 277 215 256 320C235 215 106 181 0 160C106 139 235 106 256 0Z" />
      </svg>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes scalePulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Animation;
