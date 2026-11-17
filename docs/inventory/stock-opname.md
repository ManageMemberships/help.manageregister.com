---
sidebar_position: 4
---

# Inventory Count

Inventory Count is a physical inventory counting feature that lets you audit your actual stock levels against what the system has on record. Use it to identify and resolve discrepancies such as missing, damaged, expired, or surplus items.

---

## How Inventory Count Works

1. A staff member creates a new Inventory Count session.
2. Products are added to the session — either by scanning barcodes or selecting them manually.
3. For each product, the staff member enters the **actual stock** count (what's physically on the shelf).
4. The system compares the actual count to the **current stock** on record and calculates the **missing stock** (the difference).
5. Each item is assigned an **adjustment type** explaining the discrepancy.
6. Once all items are counted and reviewed, the count is **approved**, and the system automatically adjusts inventory levels.

---

## Creating an Inventory Count

Go to **Inventory > Stock Inventory** and click **Create**.

- **Number**: Auto-generated with the prefix "SO" followed by the date and a sequence number (e.g., `SO-20250505000001`).
- **PIC (Person In Charge)**: Automatically set to the logged-in user.
- **Date**: Defaults to the current date.

After creating the count, you can begin adding items.

---

## Adding Items

To add products, go to **Inventory > Stock Inventory** and open the count. You can scan items in the **Scan barcode** box, scan straight onto the count page, or pick products by hand.

### Scan Barcode Box

Click **New stock opname item**. The popup opens with the cursor already in the **Scan barcode** box.

1. Scan a product, or type its barcode and press **Enter**.
2. If the product is already on the count, its actual stock goes up by 1. If it isn't, a new line is added with an actual stock of 1.
3. A message such as "Cleaning Kit — actual stock 3" confirms the scan.
4. The box clears and the popup stays open, so you can scan the next item straight away.

Scanners that send **Enter** right after the code work fine. The **Scan barcode** box only appears when you add an item, not when you edit one.

### Scanning on the Count Page

You can also scan on the count's page with no popup open. Each scan adds 1 to that product's actual stock, or adds the product with an actual stock of 1.

- Keys typed inside a popup or an input box are not treated as scans.
- If no product matches the code, you'll see "Product not found:" followed by the code.

### When a Code Matches More Than One Product

- If the code is one product's barcode and another product's SKU, the barcode match wins.
- If two products use the same code, the scan is refused with a message like "More than one product uses 12345 (Cleaning Kit, Cleaning Kit XL). Pick the product in the Product box instead." Add that item by hand and choose the right product in the **Product** box.

### Manual Entry

In the **New stock opname item** popup, search for a product in the **Product** box by name, barcode, or SKU, then enter the actual stock. Pressing **Enter** in the **Actual stock** box, or in the popup's other text boxes, does **Create & create another**, so the popup stays open for the next item. This doesn't apply to the **Product** or **Scan barcode** boxes.

Each product can only be on a count once. If you add a product that's already there, you'll see a message like "Cleaning Kit is already on this count (actual stock 3). Edit that line instead." Close the popup and edit that product's line in the count.

For each item, you will see:

| Field | Description |
|-------|-------------|
| **Current Stock** | The stock level the system has on record (read-only). |
| **Actual Stock** | The physical count you enter. |
| **Missing Stock** | Automatically calculated: current stock minus actual stock (read-only). |
| **Adjustment Type** | The reason for the discrepancy (see below). |
| **Attachment** | Optional image upload as proof or documentation. |

---

## Adjustment Types

Each item in an Inventory Count is assigned an adjustment type:

| Type | Description |
|------|-------------|
| **Match** | Actual stock matches the system record. No adjustment needed. |
| **Lost** | Items are missing and unaccounted for. |
| **Broken** | Items are damaged and no longer sellable. |
| **Expired** | Items have passed their expiration date. |
| **Store Use** | Items were used internally by the store. |
| **Manual Input** | A manual correction for any other reason. |

---

## Status Workflow

Each Inventory Count goes through the following statuses:

| Status | Description |
|--------|-------------|
| **Pending** | Initial state. The count has been created but counting has not begun or is in early stages. |
| **Reviewing** | Counting is in progress or under review before final approval. |
| **Approved** | The count has been finalized and stock levels have been adjusted. |

A count can only be approved when each product appears on it once.

Once a count is **approved**, it is locked:

- Its status can no longer be changed.
- Items can no longer be added, edited, or scanned in. Scanning shows "This inventory count has been approved".
- It can no longer be deleted.

---

## Stock Adjustments on Approval

When an Inventory Count is approved, the system automatically adjusts inventory:

- **If items are missing** (missing stock > 0): The product's stock is reduced by the difference.
- **If surplus items are found** (missing stock < 0): A new stock entry is created to add the extra items.

These adjustments happen for every item in the count and are reflected immediately in product stock levels.

---

## Deleting an Inventory Count

You can delete an Inventory Count only before it is approved. Once a count is approved, **Delete** is no longer available.

Only the Person In Charge (the user who created the count) can delete it.

---

## Permissions

Access to Inventory Count is controlled by the following permissions:

- **Create Inventory Count** — Create new count sessions.
- **Read Inventory Count** — View count records.
- **Update Inventory Count** — Edit count details and items.
- **Delete Inventory Count** — Delete count records.
- **Approve Inventory Count** — Approve and finalize a count (triggers stock adjustments).

---

## Enabling Inventory Count

Inventory Count is a toggleable feature. To enable or disable it, go to **Settings > General Settings** and look for the **Inventory Count** feature toggle.

---

## Tips

- Perform inventory counts regularly to keep your inventory accurate.
- Use the barcode scanner for faster counting during physical audits. Keep the **New stock opname item** popup open and scan item after item.
- Always attach photos or documentation for significant discrepancies.
- Review the missing stock calculations before approving to catch any data entry errors.
- Only users with the **Approve** permission can finalize a count, providing a layer of oversight.
