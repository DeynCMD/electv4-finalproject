import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query(
      `SELECT
         item,
         current_stock                                        AS currentStock,
         unit,
         status,
         DATE_FORMAT(last_updated, '%b %d, %Y %h:%i %p')     AS lastUpdated
       FROM inventory
       ORDER BY FIELD(status, 'Out of Stock', 'Critical', 'Low Stock', 'OK'), item`
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[GET /api/inventory]", err);
    return NextResponse.json({ error: "Failed to fetch inventory" }, { status: 500 });
  }
}
