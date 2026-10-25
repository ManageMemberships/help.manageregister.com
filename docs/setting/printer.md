---
sidebar_position: 2
---

# Printer

The Printer settings page lets you configure a USB receipt printer for use with the POS system. Printing happens directly from your browser, and settings are saved **per browser/computer** — configure the printer on each register station.

This page is for receipt printers only. To print product labels, see [Printing Product Labels](../inventory/printing-product-labels.md).

:::note
USB printing requires **Chrome or Edge**. (Star LAN/WiFi printers configured under **Registers** with WebPRNT are a separate feature and don't use this page.)
:::

---

## Configuration

- **Header**: Custom text that appears at the top of every receipt (e.g., your store name, address, phone number).
- **Name**: A name for this printer setup.
- **Driver**: Select the connection type — **USB** is the primary supported option.
- **Receipt Print Method**: How the POS Print button behaves after a sale:
  - **Browser print dialog — invoice layout** (default) — opens the full invoice in a print window and uses your computer's normal print dialog.
  - **Browser print dialog — receipt layout (80mm)** — prints a narrow, receipt-formatted page through your installed printer driver. Use this if your thermal receipts come out looking like a squeezed invoice — it's designed for 80mm roll paper.
  - **Direct to USB printer** — sends raw commands straight to the selected USB printer with no dialog.
- **Printer Language**: The command language sent to the printer (used with "Direct to USB printer"):
  - **ESC/POS** — Epson TM series (e.g., TM-T20III) and most generic thermal printers. This is the default.
  - **Star Raster** — Star TSP100 / TSP143 (models I–III). These printers only understand raster mode — with any other language they will accept the data but print nothing.
  - **Star Line Mode** — older Star printers with a built-in text engine.
- **Printer / Printer ID**: Click the **select printer** button to choose the connected USB printer — the browser will prompt you to pick a device, and these fields fill in automatically.
- **Footer**: Custom text that appears at the bottom of every receipt.

Click **Save** to store the settings, and **Test** to print a sample receipt.

---

## Choosing the right Printer Language

| Your printer | Language to select |
|---|---|
| Epson TM series (TM-T20III, etc.) | ESC/POS |
| Star TSP100 / TSP143 (I, II, III) | Star Raster |
| Older Star models | Star Line Mode |
| Other/unknown thermal printer | Start with ESC/POS, then try the others |

---

## Tips & Troubleshooting

- Test your printer after configuration by using the **Test** button, then a sample sale from the POS.
- **Test says "sent" but nothing prints**: your printer doesn't understand the selected language — try a different **Printer Language** (Star TSP100-series printers need **Star Raster**).
- **"You should choose the printer first" message**: click the **select printer** button and pick your device, then **Save**. Remember settings are per browser — a new computer or browser profile needs to be set up again.
- **Windows + Epson (or the printer won't pair over USB)**: Windows' print driver keeps exclusive control of most USB printers, so "Direct to USB" may not be able to connect. Instead, use **receipt layout (80mm)** with the printer set as your Windows default, and launch Chrome with the `--kiosk-printing` flag (add it to the Chrome shortcut target) — receipts then print instantly with no dialog.
- Keep your header concise — it appears on every receipt.
- If you switch **Receipt Print Method** to "Direct to USB printer", refresh the POS/Cashier page afterward so it picks up the new setting.
