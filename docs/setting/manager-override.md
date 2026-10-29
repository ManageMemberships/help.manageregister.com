---
sidebar_position: 6
---

# Manager Override Codes

Manager Override Codes make the POS ask for a manager's PIN before certain actions go through. Use them to stop unapproved price changes, discounts, and refunds.

Nothing asks for a PIN until you turn it on.

---

## What It Does

When someone makes a protected change, ManageRegister stops and shows a **Manager Override Required** box. A manager types their own PIN. If the PIN is right, the change goes through and ManageRegister records who approved it. If the PIN is wrong, the change is not made.

The box appears for every user, including the owner.

---

## Turn It On

1. Go to **Setting > General Setting** and open the **App** tab.
2. Find the **Manager Override Codes** section. It reads "Configure which POS actions require a manager override PIN before proceeding".
3. Under **Actions Requiring Override**, tick the actions you want to protect:
   - **Discounts & Pricing (price edits, per-item discounts, line discounts)**
   - **Refunds (issuing a refund on a sale)**
4. Click **Save** and confirm when asked.

Both boxes start unticked. To stop asking for a PIN, untick the box and save again.

:::note
Only the owner can save this setting. If anyone else tries, ManageRegister shows "Only the owner can modify application settings." and nothing changes.
:::

Set up your manager PINs before you tick a box, so a manager is ready to approve. See [Setting Up Manager PINs](#setting-up-manager-pins).

---

## What Asks for a PIN

| Action | Where | Box that controls it | Asks for a PIN |
|--------|-------|----------------------|----------------|
| Change an item's unit price | POS cart | Discounts & Pricing | Yes |
| Discount per item | POS cart | Discounts & Pricing | Yes |
| Line discount | POS cart | Discounts & Pricing | Yes |
| Transaction Discount (the whole order) | POS cart | Discounts & Pricing | Yes |
| Turn the Tax toggle off on an item | POS cart | Discounts & Pricing | Yes |
| Change the quantity | POS cart | None | No |
| **Issue Refund** | The sale's page in [Selling History](../selling-history.md) | Refunds | Yes |

The **Discounts & Pricing** box also covers the Transaction Discount and the Tax toggle, even though its label does not list them.

Anything not listed in this table, such as changing the quantity, does not ask for a PIN.

### Refunds

Only the owner and users whose role has the `delete selling` permission see the **Issue Refund** button. When **Refunds** is ticked, the refund form has a required **Manager Override PIN** field. If the PIN is wrong, no refund is made.

---

## What the Cashier Sees

1. The cashier makes a protected change at the POS, for example typing a new price.
2. A box appears with the title **Manager Override Required** and the text "This action requires a manager override. Please enter your manager PIN."
3. A manager types their PIN in the masked box and taps **Submit**.

| What happens | What the cashier sees |
|--------------|-----------------------|
| The PIN is right | The message **Override approved by** and the manager's name. The change is applied. |
| The cashier taps **Cancel** | The field goes back to its old value. Nothing changes. |
| The PIN is wrong | The message "Invalid override code." The change is not applied and the box stays on screen. Click **Cancel**, then make the change again. |

The PIN is the approving manager's own PIN, not the cashier's. The log credits the manager who approved.

Each approval covers the one change you just made.

If the same logged-in user enters five wrong PINs within a minute, PIN entry pauses for the rest of that minute. During the pause, even the right PIN shows "Invalid override code."

---

## Setting Up Manager PINs

1. Go to **User > User** and click **Edit** on the manager.
2. In the **Manager Override** section, type a PIN in **Override PIN**. Use digits only, 4 to 6 of them.
3. Save.

The section reads "Set a numeric PIN (4-6 digits) for authorizing protected POS actions like refunds and price edits". To keep a PIN as it is, leave the field blank when you save.

- **You do not see the section.** It shows only when your role has `manage manager_override` and the user you are editing has a role that can approve overrides, such as Admin. Front Desk users do not have it. See [Who Can Approve](#who-can-approve).
- **PINs cannot be viewed.** ManageRegister stores them scrambled. If a manager forgets their PIN, or you want to replace it, type a new one in the same field.
- **This is not the Session Lock PIN.** The Session Lock PIN on your Profile tab (see [General Setting](./general-setting.md#profile)) locks your own screen. It does not work as an override PIN.

---

## Who Can Approve

Two permissions control this. You can change them under **User > Role**: click **Edit** on a role, find the permission in the **Web app permissions** list (it has a search box), tick or untick it, and click **Save changes**.

| Permission | What it does | Default |
|------------|--------------|---------|
| `approve manager override` | A user's PIN works only while their role has this permission. If you move someone to a role without it, their PIN stops working. | Admin and Manager |
| `manage manager_override` | Lets a user set manager PINs on the **User > User** edit page. | Admin only |

See [Roles & Permissions](../user/roles.md) for the rest of the role list.

---

## Override Logs

Go to **Setting > Override Logs** to see every approved override, newest first. Only users whose role is named admin see this page.

| Column | What it shows |
|--------|---------------|
| **Date/Time** | When the override was approved. |
| **Action** | The kind of override. Use the **Action** filter to show one kind. |
| **Approved By** | The manager whose PIN was used. |
| **Cashier** | The user who made the change. |
| **Detail** | The type of change, such as "Price edit" or "Non taxable". It does not show the new price or the discount amount. |
| **Sale #** | The sale number. It is filled in for refunds and blank for changes made in the POS cart. |

Only approved overrides are logged. A wrong PIN does not add a row.

Force closing a rental gun on **Out Now** is logged here too. Its **Action** reads **Force close rental**, **Approved By** and **Cashier** show the person who closed it, **Detail** reads "Rental force close", and **Sale #** shows the sale if the gun was tied to one. See [Firearm Rental Custody](../firearm-rental.md#force-close-a-rental).

---

## Tips

- Give PINs to Admin and Manager users only.
- Try it on a test sale before you rely on it. Tick a box, make a change at the POS, and check the new row in **Override Logs**.
- If a PIN gets to someone who should not have it, set a new PIN for that manager.
- Tell cashiers that after a wrong PIN they need to make the change again.
