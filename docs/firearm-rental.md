---
sidebar_position: 6.5
---

# Firearm Rental Custody

Firearm Rental Custody keeps track of which rental guns are out and who has them. Staff scan a gun's serial number when they hand it out and scan it again when it comes back.

One rental charge covers any number of guns, so swapping one gun for another costs nothing extra.

It is off by default. An owner or admin turns it on, and the owner then sets it up. See [Turn It On](#turn-it-on) and [Set It Up](#set-it-up).

---

## Turn It On

1. Go to **Setting > General Setting** and open the **Feature** tab.
2. Tick **Firearm rental custody**.
3. Click **Save** and confirm when asked.

Only an owner or admin sees the **Feature** tab. Reload the page, and **Receive Rental** and **Out Now** appear in the **Fulfillment** menu.

---

## Set It Up

Once the feature is on, the **App** tab in **Setting > General Setting** has two more settings:

- **Firearm Rental Charge Products**: Pick the product you charge for a rental. A sale with this product in the cart shows the **Scan firearm** box in the Cashier. You can pick more than one product. Your rental guns do not appear in this list.
- **Rental Alert Time**: When ManageRegister warns you about guns that are still out at the end of the day. It starts at 9:00 PM. See [End-of-Day Alert](#end-of-day-alert).

Click **Save** and confirm when asked.

:::note
Only the owner can save these settings. If anyone else tries, ManageRegister shows "Only the owner can modify application settings." and nothing changes.
:::

---

## Set Up Your Rental Guns

Each rental gun is a product.

1. Go to **Inventory > Product** and edit the gun, or add it as a new product.
2. Tick **Rental firearm**.
3. Fill in **Serial Number**.
4. Save.

The **Rental firearm** box only shows while Firearm rental custody is on. You can't untick it while that gun is out.

A gun marked **Rental firearm** can't be added to a cart or sold. If someone tries, ManageRegister shows "Rental firearms can't be added to the cart". Don't tick the box on a gun you sell.

---

## Check a Gun Out in the Cashier

1. Add the rental charge product to the cart.
2. Select the member who is taking the gun.
3. If you want to record a lane, fill in **Lane (optional)**.
4. Scan the gun's serial number, barcode or SKU in the **Scan firearm** box, or type it and press Enter.

The **Scan firearm** box appears under the member card as soon as the rental charge is in the cart. With one member on the sale it reads "Checking out to" and their name. After a scan you see "Checked out &lt;serial&gt; to &lt;member&gt;." The box stays ready for the next gun, and the lane stays filled in.

### More Than One Shooter

When the sale has more than one shooter, the box asks "Which shooter is this gun for?" and shows each shooter's name. Click the name first, then scan. If you scan without picking one, you see "Pick which shooter this gun is for."

### The Gun Is Never a Cart Line

Scanning a gun never adds it to the cart, so there is no extra charge. One rental charge covers every gun you scan on that sale.

### If a Scan Is Refused

| What you see | What it means |
|--------------|---------------|
| '&lt;what you scanned&gt;' is not a rental product. | The product isn't marked **Rental firearm**. See [Set Up Your Rental Guns](#set-up-your-rental-guns). |
| No rental product found for '&lt;what you scanned&gt;'. | No product matches. Check the serial number. |
| &lt;serial&gt; is already out with &lt;member&gt; (since &lt;time&gt;). | Someone has this gun. Take it back on **Receive Rental** first. |
| Add a member to the sale first. | The sale has no member. Select one, then scan again. |

### Until the Sale Is Paid

Until the sale is paid, **Out Now** shows the gun as **in a cart, not paid yet**, with the cashier's name. Take payment as usual and the gun is tied to that sale.

The gun is released, and no longer shows as out, if you:

- take the rental charge out of the cart,
- click **Clear** in the cart menu, or
- save the cart as a quote.

If you take a shooter off the sale after you scanned their gun, the gun is not tied to the sale. It stays out, and **Out Now** shows **no sale linked**.

---

## Take a Gun Back

Go to **Fulfillment > Receive Rental**.

1. Scan the returned gun's serial number, barcode or SKU, where it says "Scan the gun being returned".
2. ManageRegister shows "Received &lt;serial&gt; from &lt;member&gt;."

A gun that isn't out shows "Not checked out." and nothing changes.

### Swap for Another Gun

After you take a gun back, **Check out another to &lt;member&gt;** appears next to **Done**.

1. Click **Check out another to &lt;member&gt;**.
2. Scan the next gun. It goes to the same member and the same sale, with no new charge.
3. ManageRegister shows "Checked out &lt;serial&gt; to &lt;member&gt;."

You get one swap for each gun you take back. To swap again, take the next gun back first. Click **Done** if you don't want to swap.

---

## See What Is Out

Go to **Fulfillment > Out Now**. It lists every gun that is out, longest out first, in large type you can read from across the counter. The page refreshes on its own. When nothing is out, it says "No rental guns out."

Each row shows:

- the gun's serial number, make and model
- the member who has it
- the lane
- the time it went out and how long it has been out

A small tag on a row tells you about its sale:

| Tag | What it means |
|-----|---------------|
| **in a cart, not paid yet** | A cashier scanned it into a sale that isn't paid yet. The cashier's name is shown. |
| **no sale linked** | The gun isn't tied to a sale, for example because the shooter was taken off the sale after the scan. |
| No tag | The gun is tied to a paid sale. |

### Force Close a Rental

Managers and admins can close a rental without scanning the gun back in. Use it when a gun can't be scanned back in, for example because its tag is wrong.

1. Click **Force close** on the row.
2. Type a reason under **Why is this being force closed?** A note is required.
3. Click **Force close** to confirm.

The row leaves the list. The force close is recorded in **Setting > Override Logs** as **Force close rental**. See [Manager Override Codes](./setting/manager-override.md#override-logs).

---

## End-of-Day Alert

If any gun is still out at the **Rental Alert Time**, owners, admins and managers get a notification. Click the bell at the top right to read it.

It says how many rental guns are still out, and lists each one with the member, serial, lane and the time it went out.

- It is sent once a day, and only if a gun is still out.
- It goes out on the hour. Only the hour of the **Rental Alert Time** counts, so 9:30 PM sends at 9:00 PM.
- The time is in your store's time zone, which is the **Timezone** on the owner's profile. See [General Setting](./setting/general-setting.md#profile).
- A gun in an unpaid cart counts as out.

---

## Who Can Use It

The table shows what the built-in roles can do by default. Admin and Manager can force close by default.

| Role | Check out, take back and view | Force close |
|------|-------------------------------|-------------|
| **Admin** | Yes | Yes |
| **Manager** | Yes | Yes |
| **staff** | Yes | No |
| **Front Desk** | Yes | No |
| **RSO** | Yes | No |
| **Receipt Counter** | No | No |

The Cashier needs POS access, which RSO does not have, so an RSO swaps guns on **Receive Rental**.

Roles you created yourself get nothing automatically. To give one access, edit it under **User > Role** and add the permissions it needs: `check_out firearm_rental`, `receive firearm_rental` and `read firearm_rental` to check out, take back and view, and `force_close firearm_rental` to force close. See [Roles & Permissions](./user/roles.md).

---

## Turn It Off

Untick **Firearm rental custody** on the **Feature** tab and save.

You can't turn it off while any gun is still out. ManageRegister shows "Firearm rental custody can't be turned off yet" and how many guns are still out. Take them back on **Receive Rental** first. A gun in an unpaid cart counts as out.

When it is off, **Receive Rental**, **Out Now** and the **Scan firearm** box disappear. Your records are kept if you turn it on again.

---

## Tips

- Put the serial number on every rental gun's product. Staff scan it to hand the gun out and again to take it back.
- If a scan says more than one product matches, scan the serial number instead.
- Check **Out Now** before you close for the day. It is the quickest way to see what hasn't come back.
