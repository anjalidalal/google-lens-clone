export const MenuItem = ({ icon, label, subLabel }) => (
  <div className="flex items-center  border-b border-b-[#70757a] justify-between p-4 hover:bg-[#3C4043] cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="text-white text-lg">{icon}</div>
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        {subLabel && <p className="text-xs text-gray-400 -mt-1">{subLabel}</p>}
      </div>
    </div>
  </div>
);
