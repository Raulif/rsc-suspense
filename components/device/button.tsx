"use client";

export default function AddDeviceButton() {
  const handleClick = () => {
    alert("This is the only client component in this entire app");
  };

  return (
    <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      Add Device
    </button>
  );
}
