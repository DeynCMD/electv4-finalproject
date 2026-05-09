import { DataTable } from "@/components/ui/DataTable";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { invoices } from "@/data/mockInvoices";

export default function InvoicesPage() {
  const columns = [
    { key: "id", header: "Invoice ID" },
    { key: "orderId", header: "Order Reference" },
    { key: "amount", header: "Amount" },
    { key: "status", header: "Status", render: (row) => <StatusBadge status={row.status} /> },
    { key: "issuedAt", header: "Issued At" }
  ];

  return (
    <div className="space-y-5">
      <SectionHeader
        eyebrow="Invoices"
        title="Invoice status monitoring"
        description="Review generated invoices and payment status linked to EDI orders."
      />
      <DataTable columns={columns} rows={invoices} getRowKey={(row) => row.id} />
    </div>
  );
}
