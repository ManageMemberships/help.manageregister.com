---
sidebar_position: 6.5
---

# Firearm Rental Custody

Firearm Rental Custody keeps track of which rental guns are out and who has them. Staff scan a gun's serial number when they hand it out and scan it again when it comes back.

One rental charge covers any number of guns, so swapping one gun for another costs nothing extra.

It is off by default. An owner or admin turns it on, and the owner then sets it up. See [Turn It On](#turn-it-on) and [Set It Up](#set-it-up).

It can also keep track of when each rental gun was last cleaned and warn you when one is due. See [Keep Rental Guns Clean](#keep-rental-guns-clean).

---

## Turn It On

1. Go to **Setting > General Setting** and open the **Feature** tab.
2. Tick **Firearm rental custody**.
3. Click **Save** and confirm when asked.

Only an owner or admin sees the **Feature** tab. Reload the page, and **Receive Rental** and **Out Now** appear in the **Fulfillment** menu.

---

## Set It Up

Once the feature is on, the **App** tab in **Setting > General Setting** has four more settings:

- **Firearm Rental Charge Products**: Pick the product you charge for a rental. A sale with this product in the cart shows the **Scan firearm** box in the Cashier. You can pick more than one product. Your rental guns do not appear in this list.
- **Rental Alert Time**: When ManageRegister warns you about guns that are still out at the end of the day, and about guns that are due for cleaning. It starts at 9:00 PM. See [End-of-Day Alert](#end-of-day-alert) and [Cleaning Reminders](#cleaning-reminders).
- **Clean Rental Guns Every (days)**: How many days a rental gun can go between cleanings.
- **Clean Rental Guns Every (rentals)**: How many rentals a rental gun can have between cleanings.

The two **Clean Rental Guns Every** settings are your store defaults for every rental gun. Leave one blank and it does not apply. See [Cleaning Schedule](#cleaning-schedule).

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
4. If this gun needs cleaning more or less often than your store default, fill in only the **Clean every** field that differs under **Rental firearm**. Leave the other field blank to use the store default.
5. Save.

The **Rental firearm** box only shows while Firearm rental custody is on. You can't untick it while that gun is out.

Use a lower number for a gun that runs dirty and needs cleaning more often. See [Cleaning Schedule](#cleaning-schedule).

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

If the gun is due for cleaning, you also see a note that says **Send it to be cleaned**. It is only a reminder, with nothing to click. See [Cleaning Reminders](#cleaning-reminders).

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

A gun that is due for cleaning also shows a **Due for cleaning** badge. See [Cleaning Reminders](#cleaning-reminders).

### Force Close a Rental

Managers and admins can close a rental without scanning the gun back in. Use it when a gun can't be scanned back in, for example because its tag is wrong.

1. Click **Force close** on the row.
2. Type a reason under **Why is this being force closed?** A note is required.
3. Click **Force close** to confirm.

The row leaves the list. The force close is recorded in **Setting > Override Logs** as **Force close rental**. See [Manager Override Codes](./setting/manager-override.md#override-logs).

---

## Keep Rental Guns Clean

Firearm Maintenance keeps track of when each rental gun was last cleaned and tells you when it is due again. It only warns. It never blocks a rental.

It works only while Firearm rental custody is on. It covers rental guns, the products ticked as **Rental firearm**. It does not cover guns you sell.

### Cleaning Schedule

Each rental gun can be cleaned every so many days, every so many rentals, or both. Whichever comes first makes the gun due. A **Clean every** field you leave blank on a gun uses the store default. If a limit is blank on the gun and in the store default, it does not apply. A gun with no limits shows **No schedule**.

A gun is due when it reaches a limit. If the limit is 5 rentals, the gun is due at the 5th rental since its last cleaning. Days are whole calendar days in your store's time zone.

- **Store default**: **Clean Rental Guns Every (days)** and **Clean Rental Guns Every (rentals)** on the **App** tab. Only the owner can change them. See [Set It Up](#set-it-up).
- **One gun**: **Clean every (days)** and **Clean every (rentals)** on the gun's product. Blank means the gun uses the store default. See [Set Up Your Rental Guns](#set-up-your-rental-guns).

### What Counts as a Rental

Rentals since the last cleaning are counted from the rental history. These count:

- guns scanned back in on **Receive Rental**
- rentals that were force closed
- guns that were swapped
- guns that are still out, except a gun sitting in an unpaid cart

A gun scanned into a cart that was cleared before the sale does not count.

A gun in an unpaid cart shows as out, but it does not count toward cleaning until the sale is paid. If the cart is cleared first, it never counts.

### See What Needs Cleaning

Go to **Fulfillment > Firearm Maintenance**. It has one row for each rental gun, and guns that are due are listed first.

Each row shows:

- a status badge
- the date the gun was last cleaned, and who cleaned it
- its days and rentals, compared with its limits
- whether the gun is out

| Badge | What it means |
|-------|---------------|
| **OK** | The gun is not due for cleaning. |
| **Due** | The gun is due for cleaning. |
| **Never cleaned** | The gun has never been cleaned. It counts as due once it has a limit. |
| **No schedule** | The gun has no limits, so it is never due. |

### Mark a Gun Cleaned

1. Go to **Fulfillment > Firearm Maintenance**.
2. Click **Mark cleaned** on the gun's row.
3. Add a note if you want to. It is optional.
4. Click **Save cleaning**.

ManageRegister saves who cleaned the gun and when, and starts both counts again from zero.

To see every time a gun was cleaned, click **History** on its row. A popup lists that gun's cleanings, newest first.

While a gun is out, the button is greyed out and reads **Out on rental**. Take the gun back on **Receive Rental** first.

### Cleaning Reminders

ManageRegister reminds you in three places. None of them blocks a rental.

- **Bell notification**: Owners, admins, managers and anyone who can clean rental guns get a notification listing the guns that are due. It arrives during the same hour as the **Rental Alert Time**, in your store's time zone. Only the hour counts, so 9:30 PM sends at 9:00 PM. It is sent at most once a day, and it repeats each day until the guns are cleaned. Nothing is sent when no gun is due.
- **Cashier**: When you scan a gun that is due into the **Scan firearm** box, an amber warning appears. The rental still goes through.
- **Out Now and Receive Rental**: **Out Now** shows a **Due for cleaning** badge on guns that are due. After you take back a gun that is due, **Receive Rental** shows a note that says **Send it to be cleaned**. It is only a reminder, with nothing to click.

---

## End-of-Day Alert

If any gun is still out at the **Rental Alert Time**, owners, admins and managers get a notification. Click the bell at the top right to read it.

It says how many rental guns are still out, and lists each one with the member, serial, lane and the time it went out.

- It is sent once a day, and only if a gun is still out.
- It goes out on the hour. Only the hour of the **Rental Alert Time** counts, so 9:30 PM sends at 9:00 PM.
- The time is in your store's time zone, which is the **Timezone** on the owner's profile. See [General Setting](./setting/general-setting.md#profile).
- A gun in an unpaid cart counts as out.

Guns that are due for cleaning get their own notification. See [Cleaning Reminders](#cleaning-reminders).

---

## Who Can Use It

The table shows what the built-in roles can do by default. Admin and Manager can force close by default.

| Role | Check out, take back and view | Force close | Clean guns |
|------|-------------------------------|-------------|------------|
| **Admin** | Yes | Yes | Yes |
| **Manager** | Yes | Yes | Yes |
| **staff** | Yes | No | Yes |
| **Front Desk** | Yes | No | Yes |
| **RSO** | Yes | No | Yes |
| **Receipt Counter** | No | No | No |

**Clean guns** means opening **Firearm Maintenance** and marking guns cleaned.

The Cashier needs POS access, which RSO does not have, so an RSO swaps guns on **Receive Rental**.

Roles you created yourself get nothing automatically. To give one access, edit it under **User > Role** and add the permissions it needs: `check_out firearm_rental`, `receive firearm_rental` and `read firearm_rental` to check out, take back and view, `force_close firearm_rental` to force close, and `clean firearm_rental` to open Firearm Maintenance and mark guns cleaned. See [Roles & Permissions](./user/roles.md).

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
- Give a gun that runs dirty its own **Clean every** limits on its product, rather than lowering the store default for every gun.
