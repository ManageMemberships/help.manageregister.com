---
sidebar_position: 7.5
---

# Paused and Inactive Members

The Cashier warns you when a member's membership is paused or inactive. A paused member shows a notice, and the sale can still go through. An inactive member blocks the sale until they are reactivated. The exception is a member whose **membership payment failed**: you can collect what they owe right at the register, or, if your gym chooses, sell to them as a guest. See [Members Whose Payment Failed](#members-whose-payment-failed).

---

## Where the Status Comes From

A member's status is set in ManageMemberships. The register reads it when you search for a member in the Cashier.

- A change in ManageMemberships can take up to about a minute to show up here.
- Search for the member again to see the new status.
- A member already in the cart keeps the old status until you search for them in the Cashier again. Reloading the page does not update it.

---

## Paused Members

### What You See

1. In the Cashier member search, a paused member's line in the results ends with a tag, for example **[MEMBERSHIP PAUSED UNTIL DEC 15, 2026]**. With no resume date, the tag is **[MEMBERSHIP PAUSED]**.
2. After you add the member, a notice appears at the top of the cart panel, above **Order details**:
   - Heading: **MEMBERSHIP PAUSED UNTIL DEC 15, 2026** (or **MEMBERSHIP PAUSED** with no resume date).
   - Second line: the member's name, followed by text saying range access and class booking are paused. The banner also says the member can still be sold to at guest rates.

The mention of guest rates is wording only. The register does not change prices because of a pause, so a paused member is charged the same price that applies to them normally.

The notice is for information only. It does not block the sale. **Proceed to payment** works as normal. Staff cannot clear the notice.

The Calendar and Class Booking pages do not show a paused warning. The notice appears when you add the member in the Cashier.

### What to Do

1. If the member was already in the cart when the pause started or ended, search for the member again in the Cashier and click **Save**. The notice updates without clearing the cart.
2. Follow your gym's policy for paused members, for example no lane or class bookings.

The notice goes away after the pause is ended in ManageMemberships and you search for the member again.

---

## Inactive Members

### What You See

1. Under the member's name in the cart, red text: **⚠ USER IS INACTIVE**.
2. A full-screen popup with the heading **INACTIVE MEMBER - TRANSACTION BLOCKED**:
   - "One or more members are INACTIVE and cannot complete transactions. Please contact ManageMemberships.com to reactivate their membership."
   - For each inactive member: "&lt;name&gt; is INACTIVE", then the **REASON** (when ManageMemberships provides one), then the **MEMBER NOTE** if the member has one.
   - "This transaction cannot proceed until the member(s) are reactivated."

The popup has one button, **Clear Cart & Remove Members**. It clears the cart and removes the members. There is no close button.

### What Is Blocked

While an inactive member is in the cart, the popup covers the screen, so the sale cannot go through.

There is no manager override for this.

The Calendar and Class Booking pages do not show an inactive warning. The block happens when you add the member in the Cashier.

### Reasons You May See

The **REASON** comes from ManageMemberships:

- **Deactivated by staff**
- **Awaiting approval**
- **Parent account inactive**
- **Payment failed**
- **Membership canceled**
- **Membership ended**
- **Inactive - reason not recorded**

**Membership canceled** and **Membership ended** also show a date, for example (Oct 2, 2026).

### Getting the Member Reactivated

1. Click **Clear Cart & Remove Members**. This also empties the cart, so you will need to add the items again.
2. In ManageMemberships, open the member and turn the **Active** switch back on. You need access to ManageMemberships to do this.
   - If the **REASON** is **Awaiting approval**, use **Approve Member** instead. The member then gets an email with a payment link.
3. Wait about a minute.
4. Search for the member again in the Cashier and add them back to the cart.

---

## Members Whose Payment Failed

When the **REASON** is **Payment failed** and ManageMemberships says how much the member owes, you don't have to send them away. What happens depends on your gym's setting for [members who owe](./setting/general-setting.md#members-who-owe-on-their-membership).

### Collecting What They Owe (Default)

Instead of the blocked popup, you see a popup with the heading **MEMBERSHIP PAYMENT OVERDUE**:

- "&lt;name&gt;'s membership payment failed and **$149.00** is overdue (2 invoices). Collect it now to reactivate the membership and continue this sale."
- The **REASON** and **MEMBER NOTE**, as for any inactive member.
- A green **Add $149.00 overdue balance to cart** button.

Click the button. A line called **Overdue membership balance — &lt;name&gt;** goes into the cart at the amount ManageMemberships shows right now. If that amount has changed since the member was looked up, a notice tells you the new amount, and the cart uses it.

- The overdue line is the exact amount owed. It can't be discounted or changed. You can remove it.
- It has to be paid in this sale. It can't go on a layaway, an invoice or a quote.
- Once it's in the cart the popup closes and the rest of the sale goes through as normal. Paying the sale records the payment in ManageMemberships, which brings the member current.

If the balance can't be collected at the register, the popup says why, for example when ManageMemberships shows nothing owed. Search for the member again to refresh their status.

A member who is inactive for any other reason, or whose payment failed but ManageMemberships didn't say how much they owe, still gets the **INACTIVE MEMBER - TRANSACTION BLOCKED** popup.

### Selling to Them as a Guest (Optional)

Your gym can choose to sell to members who owe as if they were **non-members**, instead of making them pay first. Turn this on in [General Setting](./setting/general-setting.md#members-who-owe-on-their-membership).

With it on:

1. There's no popup. The sale isn't blocked.
2. An amber notice appears at the top of the cart panel:
   - Heading: **MEMBERSHIP PAST DUE — $25.00**
   - "&lt;name&gt; is charged as a guest — no member pricing until the overdue balance is paid."
   - A **Collect overdue balance instead** button.
3. They pay **guest prices**:
   - Member-exempt products, such as range fees or targets, are charged at full price instead of free.
   - Category member discounts, for example on ammo, don't apply.
   - They can still buy, shoot and do transfers.
4. If they decide to pay what they owe, click **Collect overdue balance instead**. The overdue balance goes into the cart, and they get member pricing again for the rest of this sale.

Only members whose **payment failed** are sold to as guests. Members inactive for any other reason, such as a canceled membership or staff deactivation, are still blocked.

Account Check shows the same status. See [Account Check](./account-check.md).

---

## At a Glance

| Status | What staff see | Can the sale go through? |
|--------|----------------|--------------------------|
| **Paused** | Tag in the member search and a notice at the top of the cart panel | Yes. The notice is information only |
| **Inactive** | **⚠ USER IS INACTIVE** and the **INACTIVE MEMBER - TRANSACTION BLOCKED** popup | No. The popup blocks the sale until the member is reactivated in ManageMemberships |
| **Payment failed, owes money** (default) | The **MEMBERSHIP PAYMENT OVERDUE** popup with **Add $X overdue balance to cart** | Yes, once the overdue balance is in the cart and paid in this sale |
| **Payment failed, owes money** (sold as a guest) | An amber **MEMBERSHIP PAST DUE** notice with **Collect overdue balance instead** | Yes, at guest prices. Collecting the balance gives member pricing back |

---

## Tips

- After any change in ManageMemberships, wait about a minute and search for the member again.
- Read the **REASON** in the inactive popup. It tells you why the member was blocked.
- If the member has a note, it shows in the popup.
- The Calendar and Class Booking pages don't warn about paused or inactive members. Watch for the warnings when you add the member in the Cashier.
- The Cashier also shows an age badge, **UNDER 18** or **UNDER 21**, next to a member's name. It never blocks a sale. See [Age Badge (Under 18 / Under 21)](./age-badge.md).
