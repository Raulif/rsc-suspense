import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "../common/table";

export default function DevicesTable({ devices }: { devices: any[] }) {
  return (
    <Table className="mb-8">
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Hostname</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {devices.map((device) => (
          <TableRow key={device.id}>
            <TableCell className="font-medium">{device.type}</TableCell>
            <TableCell>{device.name}</TableCell>
            <TableCell>{device.hostname}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
