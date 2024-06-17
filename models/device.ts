//pass the number of milliseconds this fake database call should take
export async function getDevices(waitMilliseconds = 3000) {
  await new Promise((resolve) => setTimeout(resolve, waitMilliseconds));

  return [
    { id: 1, name: "Firewall", hostname: "firewall.local", type: "opnsense" },
    { id: 2, name: "Closet Switch", hostname: "closet-switch.local", type: "tplink" },
    { id: 3, name: "Home Assistant", hostname: "homeassistant.local", type: "homeassistant" },
  ];
}
