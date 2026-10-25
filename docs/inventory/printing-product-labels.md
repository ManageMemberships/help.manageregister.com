---
sidebar_position: 5
---

# Printing Product Labels

ManageRegister can print product labels from a single product, from the product list, or from a purchase order. You can print on a Rollo thermal label printer or on Avery 5167 label sheets.

---

## What a Label Shows

| Item | What prints |
|------|-------------|
| **Product name** | In the PDFs, long names are cut off to fit the label. |
| **Barcode** | A Code 128 barcode. |
| **SKU or barcode number** | The SKU or barcode number prints on the label with the barcode. |
| **Price** | The product's **Selling price**. |

There are two printer types:

| Printer | Label | How you print |
|---------|-------|---------------|
| **Rollo / roll label** (thermal printer) | One label per page, in the size you pick. The default is 1.75" x 0.5". | ManageRegister makes a PDF. You open it and print it to the label printer. |
| **Avery sheet** | Avery 5167: 80 labels on a letter-size sheet (4 across, 20 down). Each label is 1.75" x 0.5". | ManageRegister makes a PDF. You open it and print it on a regular printer. |

---

## Barcode and Price

**Barcode.** On the PDF labels, the barcode comes from the product's **Barcode** field. If that field has nothing in it, the label uses the product's **Sku**, and then the product's ID.

When you create a product, ManageRegister fills in the **Sku** and **Barcode** for you if you leave them blank. The generated code looks like `RAN-RAN-0002`. It is not a UPC. A label prints a real UPC only if the product's **Barcode** field holds that UPC.

To put the UPC on the labels:

1. Go to **Inventory > Product** and open the product.
2. Click **More actions**, then **Edit**.
3. Click in the **Barcode** field first, then scan the barcode with your barcode scanner. You can also type the UPC.
4. Save the product.

**Price.** The label shows the product's current **Selling price**. If you change the **Selling price** on the product, the next label you print shows the new price.

A purchase order line has its own **Selling price**, but the label does not use it when you print. The label uses the price on the product at that moment.

:::note
When you mark a purchase order **Received**, ManageRegister can update the product's **Selling price** from one of its stock lines. With the default FIFO selling method, that is the oldest line that still has units in stock, which may not be a line on this order. Labels printed after that show the updated price. Check the product's **Selling price** before you print labels from a received order.
:::

---

## Printing From One Product

1. Go to **Inventory > Product** and open the product.
2. Click **More actions**, then **Print label**.
3. Pick the **Rollo label** tab or the **Avery 5167 sheet** tab.
4. In the **Product setting** panel, set **Qty**. It can be 1 to 500. The default is 1.
5. For Rollo, pick the **Rollo label size**.
6. Use the button for the printer you are using. See the table below.

**Print label** only shows for roles that have the `can print label` permission. By default the Admin and Manager roles have it. Staff and the other built-in roles do not.

To give it to another role:

1. Go to **User > Role** and edit the role.
2. In the **Web app permissions** list, tick **can print label**. The list has a search box.
3. Click **Save changes**.

See [Roles & Permissions](../user/roles.md).

### Rollo Label Sizes

The **Rollo label size** dropdown has these sizes:

| Rollo label size |
|------------------|
| **1.75" x 0.5" (small product label)**. This is the default. |
| **4" x 6" (shipping)** |
| **4" x 3"** |
| **4" x 2"** |
| **3" x 2"** |
| **2.25" x 1.25"** |
| **2" x 1"** |

### What the Buttons Do

The buttons are at the bottom of the **Product setting** panel.

| Button | What it does |
|--------|--------------|
| **Printer icon** (no text) | Shows **Qty** labels on the page, the same as **Apply setting**, then opens your browser's print dialog for them. It does not make a PDF. |
| **Apply setting** | Shows **Qty** labels on the page, below the preview, laid out with the **Print setting** fields. It does not print or download anything. |
| **Print Rollo labels (PDF)** | Downloads a PDF with **one** label, whatever **Qty** says. Choose the number of copies in the print dialog. |
| **Download Avery 5167 PDF** | Downloads a PDF of Avery 5167 sheets with **Qty** copies of this product. It always starts at the first label on the sheet, so you cannot continue a partly used sheet. |

The **Print setting** panel has three fields. They change the layout of the labels shown by **Apply setting** and the printer icon. They do not change the PDFs.

| Field | What it does |
|-------|--------------|
| **Items per row** | How many labels sit side by side. The default is 3. |
| **Vertical gap** | The space between rows, in pixels. |
| **Horizontal gap** | The space between labels in a row, in pixels. |

To print a Rollo label:

1. Click **Print Rollo labels (PDF)** and open the PDF.
2. Print it at **100%** (actual size).
3. Set the printer's paper size to the same label size you picked.
4. Choose the number of copies in the print dialog.

---

## Printing for Many Products at Once

1. Go to **Inventory > Product**.
2. Tick the products you want labels for.
3. Open the bulk actions menu and pick one of these:

| Bulk action | What it does |
|-------------|--------------|
| **Print Labels (Rollo PDF)** | Prints one label for each selected product, in the **Label size** you choose. Set the number of copies in the print dialog. |
| **Print Labels (Avery PDF)** | Prints Avery 5167 sheets. Enter **Labels per product**, from 1 to 100. |

---

## Printing From a Purchase Order

You do **not** need to receive an order before you print its labels. Labels print for a pending order too. For a new invoice with many items, add every line to the order, then print all the labels at once from the **Purchasing** list.

Each item must already exist as a product. The product box on an order line only finds existing products (by name, SKU or barcode). Create any new products under **Inventory > Product** first, then add them to the order with **Add Item**. Products marked as non-stock cannot be added to a purchase order. Print their labels from the product page or the product list.

To open an order, go to **Inventory > Purchasing** and use **Actions > View** on its row. A red banner says "INVENTORY QUANTITIES WILL NOT BE UPDATED UNTIL THIS IS MARKED RECEIVED". It shows until the order is received. The order's lines are in the **Stocks** table. It has an **Add Item** button and these columns: **Product**, **Init stock**, **Expired**, **Cost**, **Selling price**, **Total initial price** and **Total selling price**. **Cost** and **Total initial price** only show for roles that have the `view_costs` permission. The price you enter for a line is its **Selling price**.

### Labels for the Whole Order

1. Go to **Inventory > Purchasing**.
2. On the order's row, open the **Actions** menu and click **Print labels**.
3. Fill in the form:

| Field | Choices |
|-------|---------|
| **Printer** | **Rollo / roll label** or **Avery sheet** |
| **Label size** | The Rollo sizes above. Only shows when **Printer** is Rollo. |
| **Labels per item** | **One per unit received** or **One per product** |

4. Click **Submit**. A PDF downloads, named `po-{id}-labels.pdf`. The `{id}` is the order's internal ID, which can differ from the PO number in the list.

Example: a pending order has two lines, one for 3 units and one for 4 units. **One per unit received** gives 7 labels. **One per product** gives 2 labels.

### Labels for One Line

1. Open the order with **Actions > View**.
2. In the **Stocks** table, click **Labels** on the line you want.
3. Fill in the form:

| Field | Choices |
|-------|---------|
| **Printer** | **Rollo / roll label** or **Avery sheet** |
| **Label size** | The Rollo sizes above. Only shows when **Printer** is Rollo. |
| **How many** | 1 to 100. It starts at the number of units in stock for that line, so lower it first if the line has more than 100 units. |

Use this for a reprint, a damaged label, or one item that arrived on its own.

### How Many Labels You Get

**One per unit received** counts the units currently in stock for each line. On a pending order, that is the quantity you ordered. After the order is received, it counts what is left on that line, and sales use your oldest stock first, so it may not match what you ordered.

For a reprint after sales have reduced the stock, use **Labels** on the line and enter the number you need in **How many**.

---

## Tips

- Print one label first and check it on your printer before you print a full run. Scan it too, if you will scan it at the register.
- Rollo labels are 1.75" x 0.5" unless you pick another size. The printer's paper size must match the size you pick.
- Keep each product's **Barcode** field filled with its real UPC if you need to scan it.
- Check the product's **Selling price** before you print, especially after receiving an order.
