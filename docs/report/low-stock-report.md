---
sidebar_position: 7
---

# Low Stock Report

The Low Stock Report shows every stocked product that has fallen to or below its **par level**, and lets you generate purchase orders directly from the list — one click per product, or in bulk by preferred supplier.

---

## Setting Up Products

For a product to appear on this report, it needs a par level:

1. Go to **Products** and edit the product.
2. Set **Par Level** — the minimum quantity you want on hand.
3. Optionally set a **Preferred Supplier** — required for bulk PO generation.
4. Save.

Any product whose on-hand stock is at or below its par level will show on the report.

---

## What You'll See

| Column | Meaning |
|---|---|
| **On Hand** | Current stock (red when zero or negative) |
| **Par Level** | Your minimum threshold |
| **Suggested Order** | Par level minus on-hand, minus anything already on an open PO |
| **On Open PO** | Quantity already sitting on purchase orders that haven't been received yet |

Because the suggested quantity accounts for open POs, you won't accidentally double-order something that's already on the way.

You can filter by **Category** or **Preferred Supplier**.

---

## Creating Purchase Orders

### One product at a time

Click **Add to PO** on a row. Pick the supplier (defaults to the preferred supplier), adjust the quantity (defaults to the suggested order) and cost per unit, and confirm. The **Add to PO** button only appears when the product actually needs more than what's already on order.

The product is added to the supplier's open **pending** PO if one exists — otherwise a new draft PO is created. Adding the same product again bumps the quantity on the existing line instead of duplicating it.

### In bulk

Select multiple rows and use **Add to PO (preferred supplier)**. Each product is added to a PO for its preferred supplier at the suggested quantity. Products with no preferred supplier, or already fully covered by an open PO, are skipped — the notification tells you how many of each.

---

## Purchase Order Lifecycle

Purchase orders move through these statuses:

1. **Pending** — a draft. Lines, quantities, and costs are freely editable.
2. **Reviewing** — optional in-between step for approval workflows.
3. **Approved** — the order has been signed off and (typically) sent to the supplier. **Inventory is not updated yet.**
4. **Received** — the shipment arrived and was checked in. **This is when stock quantities are added to inventory.** Received is final: the PO can no longer be edited or deleted.

Marking a PO **Approved** or **Received** requires the *approve purchasing* permission.

Once a PO is received, its products drop off the Low Stock Report (assuming they're back above par), and its lines no longer count toward the **On Open PO** column.

You can print product labels from a PO before it is received. See [Printing Product Labels](../inventory/printing-product-labels.md#printing-from-a-purchase-order).

---

## Sending the PO to Your Supplier

From the PO's view page (**More actions** menu):

- **Preview PO PDF** — see the purchase order document exactly as the supplier will.
- **Email PO to supplier** — sends the PDF as an attachment to the supplier's email on file (editable before sending), with an optional message. Works with any supplier.
- **Push draft to Sports South** — for suppliers flagged as Sports South (with API credentials configured under **Settings → Integrations**), this creates a *draft* order on the Sports South side with your line items. Nothing ships until you review and submit the order in Sports South. Products match by their stored Sports South item number, or automatically by UPC.

---

## Snoozing Items

Not ready to order something? Each row can be:

- **Saved for later** — moved to a separate "Saved" list until you restore it.
- **Dismissed** — hidden for 7, 14, 30, or 90 days.

Use the **Viewing** switcher at the top of the table to see saved or dismissed items and restore them. Adding a product to a PO automatically clears its saved/dismissed state.

---

## Tips

- Set par levels on your fast movers first — ammo, range fees consumables, cleaning supplies.
- Assign preferred suppliers so bulk PO generation can do the work for you.
- Approve the PO when you place the order; only mark it **Received** when the boxes are actually on the shelf — that keeps your inventory counts honest.
