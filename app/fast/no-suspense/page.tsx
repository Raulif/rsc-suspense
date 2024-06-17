import { getDevices } from "@/models/device";

import Heading from "@/components/common/heading";
import DevicesTable from "@/components/device/table";
import AddDeviceButton from "@/components/device/button";

export default async function Devices() {
  //this will load in just 10ms
  const devices = await getDevices(10);

  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 pb-6">
        <Heading>Devices (10ms database call, no Suspense)</Heading>
        <div className="flex gap-4">
          <AddDeviceButton />
        </div>
      </div>
      <DevicesTable devices={devices} />
      <p>
        This screen does not use either a page-level or a component-level Suspense boundary, but it's so fast you didn't
        notice
      </p>
    </>
  );
}
