import { getDevices } from "@/models/device";

import Heading from "@/components/common/heading";
import DevicesTable from "@/components/device/table";
import AddDeviceButton from "@/components/device/button";

export default async function Devices() {
  const devices = await getDevices();

  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 pb-6">
        <Heading>Devices (3000ms database call, page-level Suspense)</Heading>
        <div className="flex gap-4">
          <AddDeviceButton />
        </div>
      </div>
      <DevicesTable devices={devices} />
      <p>
        On this screen, we got a whole-page loading spinner. We still see the navbar rendered up top, but none of the
        page content is shown until everything is ready. Then we see it all at once.
      </p>
    </>
  );
}
