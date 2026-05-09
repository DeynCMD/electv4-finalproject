import { ActivityTimeline } from "@/components/edi/ActivityTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { activityLogs } from "@/data/mockActivityLogs";

export default function ActivityPage() {
  return (
    <div className="space-y-5">
      <SectionHeader
        eyebrow="Activity Logs"
        title="EDI transaction timeline"
        description="Follow the latest order, invoice, delivery, and inventory updates in one monitoring feed."
      />
      <ActivityTimeline logs={activityLogs} />
    </div>
  );
}
