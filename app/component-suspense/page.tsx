import { getDevices } from "@/models/device";

import Heading from "@/components/common/heading";
import AddDeviceButton from "@/components/device/button";

import Loading from "@/components/common/loading";
import { Suspense } from "react";

export default function Devices() {
  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 pb-6">
        <Heading>Devices (3000ms database call, Component-level Suspense)</Heading>
        <div className="flex gap-4">
          <AddDeviceButton />
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <LoadedDevicesTable />
      </Suspense>
      <p>
        On this screen, we get all of the page contents rendered instantly (including this paragraph), but see a loading
        spinner while the table is loaded, rendered, and streamed back to the client.
      </p>
    </>
  );
}

async function LoadedDevicesTable() {
  const devices = await getDevices();

  return <p>{devices.length || 'no length yet'}</p>;
}

