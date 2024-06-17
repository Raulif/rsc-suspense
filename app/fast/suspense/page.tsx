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
        <Heading>Devices (10ms database call, page-level Suspense)</Heading>
        <div className="flex gap-4">
          <AddDeviceButton />
        </div>
      </div>
      {devices.length ? <DevicesTable devices={devices} /> : null}
      <p>
        This screen uses a page-level Suspense boundary (via loading.tsx), but the data loading is so fast you probably
        didn't notice it unless you were looking hard and got lucky with the timing. Pages that consistently load fast
        don't get much benefit from Suspense boundaries.
      </p>
    </>
  );
}
