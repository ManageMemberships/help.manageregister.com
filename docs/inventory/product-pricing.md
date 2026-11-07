---
sidebar_position: 6
---

# How Product Pricing Works

Selling prices in ManageRegister are tied to **stock batches**, not just to the product itself. Understanding this prevents the most common pricing surprise: a price that appears to "change back on its own."

---

## Prices Live on Stock Batches

Every time inventory arrives (through Purchasing or a manual stock entry), it creates a **batch** with its own cost and selling price. You can see every batch for a product under **Product > View > Stock History**.

The price shown on the product — and charged at the POS — comes from the batch that is currently being sold:

- **FIFO** (the default): the *oldest* batch that still has stock on hand sets the price. When that batch sells out, the price automatically moves to the next batch.
- **LIFO**: the *newest* batch with stock on hand sets the price.
- **Normal**: the most recent batch by date sets the price, regardless of remaining quantity.

The selling method is configured in **Setting > General Setting**.

### Example

You have 8 rounds of 9mm left from a June delivery priced at $16.99, and 76 rounds from a November delivery priced at $17.99. Under FIFO, the product sells at **$16.99** until those last 8 units from June are gone — then the price automatically becomes **$17.99**.

---

## Changing a Price

There are two places to change a selling price:

1. **The product edit page** (Inventory > Product > Edit). Changing the selling price here updates the product **and writes the new price to every batch that currently has stock**, so the change takes effect immediately and stays in effect.
2. **A single batch** (Product > View > Stock History > Edit). Use this when you intentionally want different batches to sell at different prices — for example, to clear out older stock at a discount before newer, higher-priced stock begins selling.

:::tip
If you want one price for the item going forward, edit it on the **product page**. Only edit individual batches when you deliberately want the price to change as batches deplete.
:::

---

## Why Did a Price "Change By Itself"?

After every sale, the system recalculates the product's displayed price from its batches. Two things can make it look like someone changed a price:

- **A batch sold out.** Under FIFO, when an older batch depletes, the price moves to the next batch's price automatically.
- **Edit History attribution.** The automatic recalculation after a sale is recorded in the product's Edit History under the name of the staff member who rang up that sale, alongside the stock change. An entry that changes **both stock and selling price at the same time** is the system's post-sale recalculation — not a manual price edit by that person.

If a price keeps reverting after you change it, check **Stock History** for an older batch that still has stock at the old price.
