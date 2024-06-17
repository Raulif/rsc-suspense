import { getDevices } from "@/models/device";

import Heading from "@/components/common/heading";
import DevicesTable from "@/components/device/table";
import AddDeviceButton from "@/components/device/button";

export default async function Devices() {
  const devices = await getDevices();

  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 pb-6">
        <Heading>Devices (3000ms database call, no Suspense)</Heading>
        <div className="flex gap-4">
          <AddDeviceButton />
        </div>
      </div>
      <DevicesTable devices={devices} />
      <p>
        Notice that on this version we got a blank screen until everything appeared at once. It felt broken until then,
        with no user feedback at all
      </p>
    </>
  );
}
