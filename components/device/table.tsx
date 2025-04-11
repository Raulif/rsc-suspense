import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "../common/table";

export default function DevicesTable({ devices }: { devices: any[] }) {
  return <p>{devices.length || 'no length yet'}</p>;
}
